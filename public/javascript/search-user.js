const { response } = require("express");

async function searchUser(event) {
    event.preventDefault();

    // Get value from the search bar
    const user = document.querySelector('#search-text').value.trim();

    if(user) {
        const response = await fetch(`/api/users/${user}`, {
            method: 'GET',
            body: JSON.stringify({
                user
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            document.location.replace(`/${user}`)
        } else {
            alert(response.statusText);
        }
    };

    
}

document.querySelector("#search-btn").addEventListener('submit', searchUser);