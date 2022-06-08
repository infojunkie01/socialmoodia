async function getUser(event) {
    event.preventDefault();
    
    const body = document.querySelector('input[name="search-users"]').value.trim();
   
    const response = await fetch(`/api/user`, {
      method: 'GET',
      body: JSON.stringify({
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
      
    });
    
  
    if (response.ok) {
      console.log("ok")
    } else {
      alert(response.statusText);
    }

  }

 $(".new-post-form").off().submit(addPost);


// disables typing except for backspace in input field
$('#add-post-text').keydown(function(e) {
  if(e.keyCode !== 8) {
      e.preventDefault();
  }
});


// $('#input-text').keydown(function(e) {
//   if(e.keyCode !== 8) {
//       e.preventDefault();
//   }
// });

