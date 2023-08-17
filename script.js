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

//Add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (username.value === '' || email.value === '' || password.value === '' || password2.value === '') {
        showError(username, 'Username is requered');
    } else {
        showSuccess(username)
    }
})