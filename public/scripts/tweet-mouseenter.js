$(document).ready(function() {
  $('.tweet-section h4').hide();
  $('#tweet-container').mouseenter(function() {
    $('.tweet-section h4').show();
  })
  $('#tweet-container').mouseleave(function() {
    $('.tweet-section h4').hide();
  })
});