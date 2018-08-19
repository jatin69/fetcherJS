const request = require('request-promise');
const cheerio = require('cheerio');

function getStudents(fetchURL) {
  return new Promise((resolve, reject) => {
    const students = [];
    const studentFetchOptions = {
      uri: fetchURL,
      transform(body) {
        return cheerio.load(body);
      },
    };

    request(studentFetchOptions)
      .then(($) => {
        const items = $('table[rules=all] tr');
        for (let i = 0; i < items.length; i += 1) {
          const s = [];
          for (let j = 1; j <= 4; j += 1) {
            s.push(items[i].children[j].children[0].data);
          }
          students.push(s);
        }
      })
      .then(() => {
        resolve(students);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = getStudents;
