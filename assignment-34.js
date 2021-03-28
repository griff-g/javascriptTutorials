// if the no. of studeents is less than or equal 3 then add one more student in the college
// or remove the recent student from the college

let x = function(){
    let college = ['max','joe','sophie']
    if(college.length <= 3){
     college.push("griffyn")
     return college
}else{
    college.pop()
    return college
}

}


let y = x()
console.log(y);
