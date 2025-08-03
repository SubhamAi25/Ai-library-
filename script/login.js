const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

const login_user = false || JSON.parse(sessionStorage.getItem("user"));
const signup_user = false || JSON.parse(localStorage.getItem("User"));

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (login_user) {
        alert("User is already logedin");
    } else {

        if (check_signup_user(email, password)) {
            const obj = {
                logedIn: true,
                email: email.value,
                password: password.value
            }

            Handle_storage(obj);
        } else {
            alert("user doesn't exist!!");
        }

    }
})


function check_signup_user(email, password) {
    if (!signup_user) {
        console.log("hello")
        return false;
    }

    if (email.value !== signup_user.email) {
        console.log("hello")
        return false;
    }

    if (password.value !== signup_user.password) {
        console.log("hello")
        return false;
    }

    return true;
}

function Handle_storage(obj) {
    sessionStorage.setItem("user", JSON.stringify(obj));
}