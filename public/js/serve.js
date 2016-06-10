var TwitterPackage = require('twitter');
fs = require('fs');


var secret = {
  consumer_key: '3G2sYnahS3vZilSdKzyWmLtou',
  consumer_secret: '5K54EpoieMafVfq5NRJbJjGMJpkrlRmLex7KEFaRE2ZOjTbX7n',
  access_token_key: '739626537172008960-FWWCz7jmN1mmkaXhD4g93Ia4gNhLYzj',
  access_token_secret: 'BcvKUo6jHEJ67FyagjWg5nLLrt5SXPcaDKO3bqWXmXvM3'
}
var Twitter = new TwitterPackage(secret);


    var tweets = []
var url ='http://requestb.in/yvq9cnyv'


Twitter.stream('statuses/filter', {track: 'touch'},  function(stream) {
  stream.on('data', function(tweet) {

    fs.writeFile('helloworld.txt', tweet.text, function (err) {
      if (err) return console.log(err);
      console.log('Hello World > helloworld.txt');
    });



    console.log(tweet.text);
    stream.destroy();
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});

function wtf(){
  return "HELLO"
};



