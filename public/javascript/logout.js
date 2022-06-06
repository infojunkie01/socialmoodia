async function logout() {
    const response = await fetch('/api/user/logout', {
        method: 'post',
        headers: {'Content-Type': 'application/json'}
    });

    // If the user is successfully logged out, take them to the login screen
    if(response.ok) {
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
}

// When a button with an id of 'logout' is clicked, the user is logged out
document.querySelector("#logout").addEventListener('click', logout);