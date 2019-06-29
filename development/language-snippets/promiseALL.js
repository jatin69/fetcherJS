const output = '';
let t = 20;

function fetchData(x) {
  t *= 2;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(x);
      resolve(x);
    }, t);
  });
}

function performAction(x) {
  return new Promise((resolve, reject) => {
    fetchData(x).then((x) => {
      console.log('wow');
      resolve(x);
    });
  });
}

const array = 'hello';

const res = [];

for (let i = 0; i < array.length; i += 1) {
  res.push(performAction(array[i]));
}

Promise.all(res).then(() => {
  console.log('hello');
});

// instead make all promises & then resolve them
