const request = require('request-promise');
const cheerio = require('cheerio');
// Basically jQuery for node.js

const monthYear = 'MJ2018';
const fetchStudentOption = 'StdType=REG&ExamFlag=PG_SEMESTER_2Y&CourseCode=823&CourseName=(P.G)-%20MASTER%20OF%20COMPUTER%20APPLICATION%20(M.C.A.)&Part=I&Sem=II';
const URL = `http://duexam.du.ac.in/RSLT_${monthYear}/Students/List_Of_Students.aspx?${fetchStudentOption}`;

const students = [];

const studentFetch = {
  uri: URL,
  transform(body) {
    return cheerio.load(body);
  },
};

request(studentFetch)
  .then(($) => {
    // Process html like you would with jQuery...
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
    console.log(students);
  })
  .catch((err) => {
    // Crawling failed or Cheerio choked...
  });

// export default students;
