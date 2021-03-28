// Create a function that takes as a parameter an array of "stringified" numbers and 
// returns an array of numbers.

// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

// toNumberArray(["91", "44"]) ➞ [91, 44]

// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]

const toNumberArray = ["9.4","4.2"]

const finalArr = toNumberArray.map((num)=>Number(num));
console.log("🚀 ~ file: assignment-41.js ~ line 13 ~ finalArr", finalArr)
