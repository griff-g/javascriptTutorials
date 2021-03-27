// 0 is even Number
// 1 is odd number
// 3 is odd number

let x = function () {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even number`);
    } else {
      console.log(`${i} is odd number`);
    }
  }
};
let z = x();