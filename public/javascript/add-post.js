async function addPost(event) {
    event.preventDefault();

    const post_content = document.querySelector('input[name="add-post-text"]').value;
  
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        post_content
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
  
  document.querySelector('#add-post-button').addEventListener('submit', addPost);
