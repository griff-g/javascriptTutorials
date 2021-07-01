// Given  an array, convert the array elements into respective object property values,
// and display it.
// Properties are name, age, eligibility, message.
const user = ["joe", 67, true, "Hello All"];
const newObj = new Object();

user.forEach((value)=>{
    if (value === "joe"){
        newObj.name = value;
    }else if(value === 67){
        newObj.age = value;
    }else if(value === true){
        newObj.eligibility = value;
    }else if(value === "Hello All"){
        newObj.mesasge = value;
    }
})

console.log(newObj);