//Write a function that takes the base and height of a triangle and return its area.
//The area of a triangle is: (base * height) / 2

// function areaCalculation(base, height) {
//   return (base * height) / 2;
// }
// console.log(areaCalculation(4, 7));

var areaCalculation = function (base, height) {
  return (base * height) / 2;
};

var base = 7;
var height = 4;
console.log(areaCalculation(base, height));
