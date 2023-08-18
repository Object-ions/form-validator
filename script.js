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

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Invalid email');
    }
}

//Check required fields
function chackRequiredField(inputArr) {
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

//check length of input
function checlLenght(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters long`);
    }else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters long`);
    } else {
    showSuccess(input);
    }
}

//Get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
   chackRequiredField([username, email, password, password2]);
   checlLenght(username, 3, 16);
   checlLenght(password, 6, 25);
   checkEmail(email);
})