// Global Object

// console.log(global);

let countDown = 10;

global.setTimeout(() => {
  console.log('Launch');
  clearInterval(int);
  console.log(__dirname);
  console.log(__filename);
}, 11000);

const int = setInterval(() => {
  console.log(`${countDown}...`);
  countDown--;
}, 1000);

