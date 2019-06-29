let output = '';
let t = 20;

function fetchData(x) {
  t *= 2;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, t);
  });
}

const array = 'hello';

// bad practice
// for (let i = 0; i < array.length; i++) {
//   fetchData(array[i])
//     .then(() => (output += array[i]))
//     .then(() => console.log(output));
// }

// instead make all promises & then resolve them
