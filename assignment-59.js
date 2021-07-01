const person = { name: 'joe', place: 'USA', age: '30', hobby: 'reading',extras:["vehicle:bike","student:true"] }
person.extras.forEach(element => {
    person[element.split(":")[0]] = element.split(":")[1]
});
person.extras = undefined
console.log(person);
//{ name: 'joe', place: 'USA', age: '30', hobby: 'reading',vehicle:'bike' }