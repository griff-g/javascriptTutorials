// Move All the zeros in the given array at the end of the array;

const moveZeros = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

let newArr = moveZeros.filter((num)=> num !== 0)
let newArr2 = moveZeros.filter((num)=> num === 0)

let finalArr = newArr.concat(newArr2);
console.log(finalArr);