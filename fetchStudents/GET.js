
const getStudents = require('./sGET.js');

// Variables
const monthYear = 'MJ2018';
const stdType = 'REG';
const examFlag = 'PG_SEMESTER_2Y';
const courseCode = '823';
const courseName = '(P.G)-%20MASTER%20OF%20COMPUTER%20APPLICATION%20(M.C.A.)';
const part = 'I';
const sem = 'II';

// URLs
const fetchStudentOption = `StdType=${stdType}&ExamFlag=${examFlag}&CourseCode=${courseCode}&CourseName=${courseName}&Part=${part}&Sem=${sem}`;
const URL = `http://duexam.du.ac.in/RSLT_${monthYear}/Students/List_Of_Students.aspx?${fetchStudentOption}`;

getStudents(URL).then((students) => {
  console.log(students);
});
