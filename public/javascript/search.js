async function searchUserHandler() {

    const username = document.querySelector('.search-users').value.trim();

    if(username) {
        const response = await fetch(`/profile/${username}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace(`/profile/${username}`)
        } else {
            alert("No user with that username found");
        }
    }
}

document.querySelector('.search-users').addEventListener('keypress', function(e) {
    if (e.keyCode == 13) {
        searchUserHandler(e);
    }
})