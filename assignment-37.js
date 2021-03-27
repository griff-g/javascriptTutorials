//Given two arguments, return an array which contains these two arguments.

//Example

//makePair(1, 2) ➞ [1, 2]
//makePair(51, 21) ➞ [51, 21]

const newArr = (num1, num2) => {
  let Arr = [];
  Arr.push(num1, num2);
  return Arr;
//   return [num1,num2];
};
console.log(newArr(1, 2));
