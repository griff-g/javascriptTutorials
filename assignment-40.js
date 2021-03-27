// Create a program that will take two arrays of integers, a and b.
// Each array will consist of 3 positive integers,
// representing the dimensions of cuboids a and b.
// Find the difference of the cuboids' volumes.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Examples
// findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]) ➞ 12040

// findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]) ➞ 276

// findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]) ➞ 405

// findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]) ➞ 5412

let vol1 = 1;
let vol2 = 1;
const arr1 = [7, 6, 16];
const arr2 = [26, 9, 26];

const arrayValueType = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    vol1 = vol1 * arr1[i];
  }

  arr2.forEach((arr2) => {
    vol2 = vol2 * arr2;
  });
};

arrayValueType(arr1, arr2);
console.log(Math.abs(vol1-vol2));