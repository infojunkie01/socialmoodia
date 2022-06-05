async function addPost(event) {
    event.preventDefault();

    const body = document.querySelector('input[name="add-post-text"]').value.trim();
   
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }

document.querySelector('.new-post-form').addEventListener('submit', addPost);

