// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {

  $('#new_tweet').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
        url: $(this).attr('action'),
        method: $(this).attr('method'),
        data: $(this).serialize(),
        dataType: ''
    }).done(function(response) {
      var tweet = document.createElement('div')
      tweet.innerHTML = response
      document.querySelector('.tweets').prepend(tweet)
      // $('.tweets').prepend(response)
      console.log(response)
      // document.querySelector('#create-tweet').disabled = false
      document.querySelector('#tweet_message').value = '';
      // tweet.innerHTML = response
      // $('.tweets').prepend()
    }).fail(function() {
      console.log('air roar!!! air roar!!!');
    });
  });
});
