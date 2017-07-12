// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {

  $('#new_tweet').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
        url: $(this).attr('action'),
        method: $(this).attr('method'),
        data: $(this).serialize(),
        dataType: 'json'
    }).done(function(response) {
      console.log(response)
      var tweetContainer = document.createElement('li')
      var tweetMessage = document.createElement('p')
      var tweetCreated = document.createElement('time')
      tweetContainer.className = 'tweet'
      tweetCreated.innerHTML = response.created_at
      tweetMessage.innerHTML = response.message
      tweetContainer.append(tweetMessage)
      tweetContainer.append(tweetCreated)
      document.querySelector('.tweets').prepend(tweetContainer)
      // document.querySelector('.tweets').prepend(tweet)
      // $('.tweets').prepend(response)
      // document.querySelector('#create-tweet').disabled = false
      document.querySelector('#tweet_message').value = '';
      // tweet.innerHTML = response
      // $('.tweets').prepend()
    }).fail(function() {
      console.log('air roar!!! air roar!!!');
    });
  });
});
