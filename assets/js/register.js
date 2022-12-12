// const { format } = require("mysql");
const form = document.getElementById('form')

function hasNumber(myString) {
    return /\d/.test(myString);
}

var regExp = /[a-zA-Z]/g;

// function validate()
form.addEventListener('submit', (e) =>{
    let messages = []
    console.log('here')
    var phone=document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("password1").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var slot = document.getElementById("slot").value;

    if(!name){
        messages.push("Please enter a name");
        //return false;
    }else if(hasNumber(name)){
        messages.push("Name cannot contain a digit");
        //return false;
    }

    if(!age){
        messages.push("Please enter age");
        //return false;
    }else if(age < 18 || age > 65){
        messages.push("Sorry but your cannot become a member due to age");
        //return false;
    }

    if(!phone){
        messages.push("Please provide phone number");
        //return false;
    }else if(phone.length != 10){
        messages.push("Please enter correct phone number");
    }else if(regExp.test(phone)){
        messages.push("Phone number cannot contain a alphabet");
        //return false;
    }

    if(!password){
        messages.push("Please enter a password");
        //return false;
    }else if(password.length < 8){
        messages.push("Password must be atlease 8 characters long");
        //return false;
    }

    if(!confirmPassword){
        messages.push("Please confirm your password");
        //return false;
    }else if(password != confirmPassword){
        messages.push("Passwords do not match");
        //return false;
    }

    if(messages.length > 0){
        e.preventDefault()
        alert(messages[0])
    }

})
    
    //return true;
    // window.location.href='/dashboard'

