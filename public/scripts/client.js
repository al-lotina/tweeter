/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  $("#error-message1").hide(); 
  $("#error-message2").hide();
  
  const createTweetElement = function (tweetObj) {
    let date = new Date(tweetObj.created_at);
    let $tweet = `
    <section class="tweet-section">
    <article>
      <header>
        <div>
          <img src=${tweetObj.user.avatars} alt="avatar" width="50" height="50">            
          <h3>${tweetObj.user.name}</h3>
        </div>  
        <h4>${tweetObj.user.handle}</h4>
      </header>        
      <p>${tweetObj.content.text}</p>
      <br>
      <footer>
        <div>
          <span>${date.toString().slice(4, 21)}</span>
        </div>
        <div>🔁 🤍 ⚐</div>
      </footer>
    </article>
    </section>
    `;
    return $tweet;
  };
   
  const renderTweets = function(arrOfTweets) {
    $('#tweet-container').empty();
    for (let tweetObj of arrOfTweets) {
      let $tweet = createTweetElement(tweetObj);
      $('#tweet-container').append($tweet); 
    }
  };
  
  $('.form').submit(event => {
    event.preventDefault();
    let str = $(".form").serialize();
    if ($('.textarea').val().length === 0) {
      $('#error-message1').slideDown('slow');
    } else if ($('.textarea').val().length > 140) {
      $('#error-message2').slideDown('slow');
    }
    else {
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: str,
        success: "success",
      })  
      .then(res => {
        return loadTweets();
      })
      $('#error-message1').hide();
      $('#error-message2').hide();      
    }
  });
  
  const loadTweets = function () {
    $(function(){
      $.ajax({url: "/tweets", dataType: "json", method: 'GET'})
        .then(function (res) {
          renderTweets(res.reverse());
          $('.textarea').val('');
          $('.counter').val('140');
      })
    }) 
  };

  loadTweets(); 
})