async function addPost(event) {
    event.preventDefault();

    const body = document.querySelector('input[name="add-post-text"]').value.trim();
    console.log(post_content);

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
  
  document.querySelector('#add-post-button').addEventListener('submit', addPost);
