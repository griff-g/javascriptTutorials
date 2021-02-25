var age = 19;
var idCheck = false;

if (age >= 18) {
   console.log('you can watch movie');
   if(idCheck){
       console.log("Proceed to your seat");
   }else{
       console.log("id is not valid");
   }
}else{
    console.log('you cant watch movie');
}
 