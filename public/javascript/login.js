const { response } = require("express");

async function loginFormHandler(event) {
    event.preventDefault();

    // Store the value of the username and password
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // Check to make sure both fields aren't blank before running more code
    if(username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username, 
                password
            }),
            headers: {'Content-Type': 'application/json'}
        })
    }

    // If the route returns a code 200, redirect the user to their homepage
    if(response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
