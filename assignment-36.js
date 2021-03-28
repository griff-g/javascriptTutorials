const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let evenArr = [];
let oddArr = [];
for (let i = 0; i <numArr.length; i++) {
  if (numArr[i] % 2 === 0) {
    evenArr.push(numArr[i]);
  } else {
    oddArr.push(numArr[i]);
  }
}
console.log(oddArr);
console.log(evenArr);