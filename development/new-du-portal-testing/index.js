const rp = require('request-promise');
const $ = require('cheerio');
const url = 'http://duresult.in/students/Combine_GradeCard.aspx';

// rp(url)
//     .then(function (html) {
//         //success!
//         let captchaComponnent = $('#imgCaptcha', html)[0].attribs.src;
//         let captchaCode = parseInt(captchaComponnent.split("&")[0].split("=")[1]);
//         let captchaDateAndTime = parseInt(captchaComponnent.split("&")[1].split("=")[1]);

//         console.log(captchaCode);
//     })
//     .catch(function (err) {
//         //handle error
//     });

//   parseInt(document.querySelector('#imgCaptcha').src.split("&")[0].split("=")[1])

