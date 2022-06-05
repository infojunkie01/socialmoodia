// const { response } = require("express");

async function loginFormHandler(event) {
    event.preventDefault();

    // Store the value of the username and password
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // Check to make sure both fields aren't blank before running more code
    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
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
            alert("No user with that login");
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
