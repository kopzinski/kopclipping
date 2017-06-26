var TwitterPackage = require('twitter');

var secret = {
  consumer_key: 'YOURS',
  consumer_secret: 'YOURS',
  access_token_key: 'YOURS',
  access_token_secret: 'YOURS'
}

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@kopzinksi'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
