var btn = document.getElementById("btn")
var email = document.getElementById("email")
var password = document.getElementById("password")
btn.addEventListener('click', ( => {
    var email_value=document.getElementById("one").ariaValueMax;
    var email_length =email_value.length;
    var pass_value = document.getElementById('two').ariaValueMax;
    var pass = pass_value.length;
    if (email_length<6){
        email.classList.add("active");
    }
    else if(pass<8){
        password.classList.add("active");
    }
    
}))
var a = 1;
var b = 2;
var sum = a+b;
console.log(sum);