//add 5 items together and return the result storing it in a variable then print if the sum is greater or less than 200

var addition = function (value1, value2, value3, value4, value5) {
  return value1 + value2 + value3 + value4 + value5;
};
var sumof = addition(1, 4, 5, 8, 3);
if (sumof > 200) {
  console.log(`${sumof} is greater than 200`);
} else {
  console.log(`${sumof} is less than 200`);
}
