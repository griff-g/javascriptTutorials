// Instructions:- calculate the area of a square, reactangle and circle, if the sum of all the three areas
// is greater than 200, display a message that , "Sum of Areas is greater than 200", if not then display the 
// product of all the three areas.

function areaCalculation(){
var a = 6
var b = 7
var r = 4
var square = a**2
var rectangle = a*b
var circle = 3.14*(r**2)

if(square+rectangle+circle > 200){
    console.log("Sum of Areas is greater than 200");
}else{
    console.log(square*rectangle*circle);
}    
}

areaCalculation()