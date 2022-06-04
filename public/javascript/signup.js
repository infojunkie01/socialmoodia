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
            headers: {'Content-Type': 'application/json'}
        });

        console.log("response", response)

        if(response.ok) {
            // If the user successfully signs up, redirect them to the home page
            document.location.replace('/');
        } else {
            console.log("response", response)
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);