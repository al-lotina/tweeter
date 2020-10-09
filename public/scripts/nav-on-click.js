$(document).ready(function() {
  $('#compose-tweet').hide();
  $('nav button').click(function(){
    $('#compose-tweet').slideDown('slow');
  });
});