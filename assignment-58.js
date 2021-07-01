const person = ["name:joe","place:USA","age:30","hobby:reading"];
const personObj = new Object(); //{}

person.forEach(input=>{
   
   personObj[input.split(":")[0]] = input.split(":")[1]
   
})
console.log(personObj);


// {
//     name:joe,
//     place:USA
// }