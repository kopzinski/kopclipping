var TwitterPackage = require('twitter');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var secret = {
  consumer_key: 'EyYjCYULYD1fsC9MaTkcYIXvd',
  consumer_secret: 'M98Mhw5OxIJo1oNu3BeNr8eSkfotnXqD5TBR3xEj5Rcl5XulHh',
  access_token_key: '57490994-sVmzqEwnRHJjqaAlYLAScy2v57S2HgcbKujKnctom',
  access_token_secret: 'bLGBuG5pZCYl2mhjVAUcKWFVUVCK0fKg7IQGLzaMDvpAe'
}

var Post = mongoose.model('Post', { text: String });

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@realDonaldTrump'}, function(stream) {

  stream.on('data', function(tweet) {

    console.log( tweet.text );

    var postAtual = new Post( { text: tweet.text } );

    postAtual.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Salvo com sucesso.');
      }
    });

  });

  stream.on('error', function(error) {
    console.log(error);
  });

});
