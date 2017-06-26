var TwitterPackage = require('twitter');

var secret = {
  consumer_key: 'EyYjCYULYD1fsC9MaTkcYIXvd',
  consumer_secret: 'M98Mhw5OxIJo1oNu3BeNr8eSkfotnXqD5TBR3xEj5Rcl5XulHh',
  access_token_key: '57490994-sVmzqEwnRHJjqaAlYLAScy2v57S2HgcbKujKnctom',
  access_token_secret: 'bLGBuG5pZCYl2mhjVAUcKWFVUVCK0fKg7IQGLzaMDvpAe'
}

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@AntonioVSCastro'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
