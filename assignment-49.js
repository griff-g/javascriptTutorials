// You have been given a string , your task is to print the below line
// VALUE is a new Entry.
// for Eg JOHN is a new Entry;


const printFn = (value) => {

}

const str = "john/henry/joe/daisy/mike";
let newStr = str.split('/');
newStr = newStr.map((names)=> names.toUpperCase())

newStr.forEach((value)=> console.log(`${value} is a new Entry`))
