function calc(a, b, r) {
  var square = a ** 2;
  var rectangle = a * b;
  var circle = 3.14 * r ** 2;

  var sum = square + rectangle + circle
  console.log("Sum is",sum);

  if (sum > 200) {
    return "Sum of Areas is greater than 200";
  } else {
   
    return(square * rectangle * circle);
  
  }
}

var a = 6;
var b = 7;
var r = 4;
console.log(calc(a, b, r));
