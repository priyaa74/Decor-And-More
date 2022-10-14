
let regData= JSON.parse(localStorage.getItem("userData"))||[];
document.querySelector("#register").addEventListener("submit",getData);

function getData(e){
e.preventDefault();

 let field={};
 let email= document.getElementById("email").value;
 let password= document.getElementById("password").value;
 let confirmPassword= document.getElementById("confirmPassword").value;
  
 field.email=email;
 field.password= password;
 field.confirmPassword=confirmPassword;
 regData.push(field);

 if(password !== confirmPassword){
    alert("Password doesn't match! Try again.");
 }
 else{
    alert("Account has been created successfully");
 localStorage.setItem("userData",JSON.stringify(regData));
 }
}
let userData = JSON.parse(localStorage.getItem("userData"))
document.querySelector("#logIn").addEventListener("submit",compare);

function compare(event){
    event.preventDefault();

    let inputEmail= document.getElementById("inputEmail").value;
    let inputPassword= document.getElementById("inputPassword").value;

    let check = userData.filter(function(ele){
        return inputEmail == ele.email && inputPassword == ele.password;
    })

    if(check.length == 0){
        alert("Wrong credentials!")
    }
    else{
        alert("Login success. Explore your styles!")
        window.location.href='navbar.html';
    }
}
