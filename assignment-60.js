const person = ["name:joe","place:USA","age:30","hobby:reading"];


const personObj = person.reduce((newObj,value)=>{
     newObj[value.split(":")[0]] = value.split(":")[1]
     return newObj
},new Object())
console.log(personObj);