// Your task is to arrange all the even elements at the start followed by the odd numbers
let arr1 = [1,6,9,3,10,5,12,2]


let newArr1 = arr1.filter((num) => num % 2 ===0)
let newArr2 = arr1.filter((num) => num % 2 ===1)

const finalArr = newArr1.concat(newArr2);

console.log(finalArr);