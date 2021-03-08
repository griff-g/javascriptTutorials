function login(email,pass){
if(email == 'hello@gmail.com'){

    if (pass =='password'){
        console.log('you can log in');
    }else{
        console.log(`wrong password`);
    }
}else{
    console.log(`wrong email`);
}    
}
var email = 'hello@gmail.com';
var pass = 'password';
login()

