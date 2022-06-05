<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

import 'https://cdn.jsdelivr.net/npm/emoji-picker-element@^1/index.js'
import insertText from 'https://cdn.jsdelivr.net/npm/insert-text-at-cursor@0.3.0/index.js'

  document.querySelector('emoji-picker').addEventListener('emoji-click', e => {
    insertText(document.querySelector('#add-post-text'), e.detail.unicode)
  })

  $(document).ready(function(){
  $('#add-post-text').click(function(){
    $('#emoji-picker-post').toggle();
  });
});
