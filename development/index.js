const getStudents = require('./fetchStudents.js');
const getResult = require('./fetchResult.js');
const constants = require('./constants.js');

getStudents(constants.studentURL)
  .then((students) => {
    const Bomb = [];
    for (let i = 1; i < students.length; i += 1) {
      Bomb.push(getResult(constants.resultURL, students[i][1], constants.collegeCode));
    }
    return Bomb;
  })
  .then(Bomb => Promise.all(Bomb))
  .then(names => console.log({ names }));

// const oneStudent = '1724514';
// getResult(oneStudent).then(title => console.log(title));
