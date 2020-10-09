$(document).ready(function() {
  $('textarea').keyup(function() {
    if (140 - this.value.length >= 0) {
      $('.counter')[0].setAttribute("style", "color:#545149");
      $('.counter')[0].innerText = 140 - this.value.length;
    } else {
      $('.counter')[0].setAttribute("style", "color:red");
      $('.counter')[0].innerText = 140 - this.value.length;
    }
  })
});


