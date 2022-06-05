// const { response } = require("express");

async function loginFormHandler(event) {
    event.preventDefault();

    // Store the value of the username and password
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // Check to make sure both fields aren't blank before running more code
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // If the route returns a code 200, redirect the user to their homepage
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

async function signupFormHandler(event) {
    event.preventDefault();

    // Store the values in the text inputs and trim off whitespace from either end
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // Check to make sure neither of the values are null
    if(username && password) {
        // Access the post route in api/users with the following data
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username, 
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok) {
            // If the user successfully signs up, redirect them to the home page
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);


