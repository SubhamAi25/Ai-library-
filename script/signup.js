const form = document.getElementById("form");
const fullName = document.getElementById("full-name")
const email = document.getElementById("email");
const password = document.getElementById("password");

const User = false || JSON.parse(localStorage.getItem("User"));

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(User){
        alert("User already exist!!");
    }else{
        Handle_form(fullName, email, password);
    }
})

function Handle_form(name, email, password){
    const name_reg = /^.{5,}$/;
    const email_reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password_reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(!name_reg.test(name.value)) {
        return;
    } 
    
    if(!email_reg.test(email.value)){
        return;
    }
    
    if(!password_reg.test(password.value)){
        return;
    }

    const obj = {
        name: name.value,
        email: email.value,
        password: password.value
    }

    Handle_storage(obj);
}

function Handle_storage(user_obj){
    localStorage.setItem("User", JSON.stringify(user_obj));
}