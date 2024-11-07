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
let checkbox = document.getElementById('checkbox')
const password = document.getElementById('password')
const welcome = document.getElementById('welcome')
let arr = [];
function signup() {
    logic()
}
function logic() {
    let i = arr.findIndex((userdetails1) => userdetails1.email === Email.value.trim())
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
        error.innerHTML = 'This email already exists'
    } else {
        let allFields = {
            email: Email.value.trim(),
            password2: password2.value.trim(),
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
    let index = arr.findIndex((userdetails1) =>
        userdetails1.email === login_email.value.trim() &&
        userdetails1.password2 === login_password.value.trim())
    
    error2.innerHTML = ''
    if (index!=-1) {
        login.style.display = 'none';
        signin.style.display = 'none';
        welcome.style.display = 'block';
    }
    

   else if (login_email.value == '' || login_password.value == '') {
        error2.innerHTML = 'Plss add all fields';
        
    }
    else {
        error2.innerHTML = 'Incorrect email address or password'
        
    }
}
window.onload = function () {
    let store=JSON.parse(localStorage.getItem('userdetails'))
    arr=store
    // if (!localStorage.getItem('userdetails')) {
    //     localStorage.setItem('userdetails', '[]')
    // }
    // arr = JSON.parse(localStorage.getItem('userdetails'))
}