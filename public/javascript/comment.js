async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector('input[name="add-comment-text"]').value.trim();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          post_id,
          comment_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
}
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);


// disables typing except for backspace in input field
$('#add-comment-text').keydown(function(e) {
  if(e.keyCode !== 8) {
      e.preventDefault();
  }
});
