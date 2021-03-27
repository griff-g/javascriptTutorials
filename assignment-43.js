// Your Given an Array of integers find the even numbers in the array and multiply them by 2 and return 
// the new array

let checkEven = [1,6,9,3,10,5,12,2]
const name = () => {

}

const finalArr = checkEven.map((num) => {
    return num % 2 === 0 ? num * 2 : num
    // if (num % 2 === 0) {
    //     return num * 2
    // } else {
    //     return num
    // }
} )

console.log(finalArr);