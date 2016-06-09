var TwitterPackage = require('twitter');

var secret = {
  consumer_key: '3G2sYnahS3vZilSdKzyWmLtou',
  consumer_secret: '5K54EpoieMafVfq5NRJbJjGMJpkrlRmLex7KEFaRE2ZOjTbX7n',
  access_token_key: '739626537172008960-FWWCz7jmN1mmkaXhD4g93Ia4gNhLYzj',
  access_token_secret: 'BcvKUo6jHEJ67FyagjWg5nLLrt5SXPcaDKO3bqWXmXvM3'
}
var Twitter = new TwitterPackage(secret);

// Twitter.get('statuses', function(error, tweets, response) {
//   if (error) throw error;
//   console.log(tweets);
// });

// https://api.twitter.com/1.1/search/tweets.json?q=touch&src=typd&lang=en-gb

// Twitter.get('favorites/list', function(error, tweets, response){
//   if(error) throw error;
//   var tweet = (tweets[0].text);  // The favorites.
//   // console.log(response);  // Raw response object.
// });


Twitter.stream('statuses/filter', {track: 'touch'},  function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
