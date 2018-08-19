const cheerio = require('cheerio');

const $ = cheerio.load(
  '<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>',
);

//= > Apple

$('ul .pear').attr('class');
//= > pear

console.log($('.apple').text());

console.log($('li[class=orange]').text());
