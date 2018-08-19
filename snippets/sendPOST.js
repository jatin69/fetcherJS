const request = require('request-promise');
const cheerio = require('cheerio');
const fsc = require('fs-cheerio');
const constants = require('./getConstants.js');

function getResult(resultURL, sRollNo, sCollege) {
  const resultFetchOptions = {
    uri: resultURL,
    method: 'POST',
    form: {
      ddlcollege: sCollege,
      txtrollno: sRollNo,
      btnsearch: constants.searchButtonValue,
      __EVENTTARGET: '',
      __EVENTARGUMENT: '',
      __LASTFOCUS: '',
      __VIEWSTATE: constants.viewState,
      __EVENTVALIDATION: constants.eventValidation,
    },
    transform(body) {
      return cheerio.load(body);
    },
  };

  return new Promise((resolve, reject) => {
    request(resultFetchOptions)
      .then(($) => {
        // dump to html first
        fsc.writeFile(`${__dirname}/htmlsave/${sCollege}_${sRollNo}.html`, $);
        return $;
      })
      .then(($) => {
        // then start processing
        const responseTitle = $('title')[0].children[0].data.trim();
        if (responseTitle === 'Untitled Page') {
          const nameOfStudent = $('span[id="lblname"]')[0].children[0].data.trim();
          resolve(nameOfStudent);
        } else {
          reject(responseTitle);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// const oneStudent = '1724514';
// getResult(constants.resultURL, oneStudent, '234').then(title => console.log(title));

module.exports = getResult;
