const firstname = document.getElementById('Firstname')
const lastname = document.getElementById('Lastname')
const Email = document.getElementById('Email')
const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')
const login = document.getElementById('whole2')
const login_email = document.getElementById("login_email")
const login_password = document.getElementById("login_password")
const signin = document.getElementById('whole');
const error = document.getElementById('error')
const error2 = document.getElementById('error2')
const checkbox = document.getElementById('checkbox')
const password = document.getElementById('password')
const welcome = document.getElementById('welcome')
let arr = [];
function signup() {

    logic()
}
function logic() {
    let i = arr.findIndex((userdetails) => userdetails.email === Email.value.trim())
    if (
        firstname.value == '' ||
        lastname.value == '' ||
        Email.value == '' ||
        password1.value == '' ||
        password2.value == ''
    ) {
        error.innerHTML = 'pls add all fields!'
    } else if (password1.value != password2.value) {
        error.innerHTML = 'password does not match!'
    }
    else if (i != -1) {
        error.innerHTML = 'This user already exists'
    } else {
        const allFields = {
            email: Email.value.trim(),
            password2: password2.value.trim(),
            loginemail: login_email.value.trim(),
            loginpassword: login_password.value.trim()
        }
        arr.push(allFields)
        // console.log(allFields);
        localStorage.setItem('userdetails', JSON.stringify(arr))
        login.style.display = 'block';
        signin.style.display = 'none';

    }


}

function gotoLogin() {
    login.style.display = 'block'
    signin.style.display = 'none'
}
function gotoSignup() {
    login.style.display = 'none'
    signin.style.display = 'block'
}
function loginPage() {
    error2.innerHTML = ''
    if (login_email.value == '' || login_password.value == '') {
        error2.innerHTML = 'Plss add all fields';
        return  
    }
    let index = arr.findIndex((userdetails) =>
        userdetails.loginemail === login_email.value.trim() &&
        userdetails.loginpassword === login_password.value.trim())
    console.log(index);

    if (index) {
        login.style.display = 'none';
        signin.style.display = 'none';
        welcome.style.display = 'block';
    }
    else {
        error2.innerHTML = 'Incorrect email address or password'

    }
}
window.onload = function () {
    if (!localStorage.getItem('userdetails')) {
        localStorage.setItem('userdetails', '[]')
    }
    arr = JSON.parse(localStorage.getItem('userdetails'))
}