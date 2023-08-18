//Get DOM elements
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password-2');

//Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

//Add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (username.value === '') {
        showError(username, 'Username is requered');
    } else {
        showSuccess(username)
    }

    if (email.value === '') {
        showError(email, 'email is requered');
    } else {
        showSuccess(email)
    }
    
    if (password.value === '') {
        showError(password, 'Password is requered');
    } else {
        showSuccess(password)
    }

    if (password2.value === '') {
        showError(password2, 'Repeat password is requered');
    } else {
        showSuccess(password2)
    }
})