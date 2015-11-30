var Twitter = require('twitter');
var http = require('http')
var port = process.env.PORT || 1337;

var client = new Twitter({
    consumer_key: 'olfYk7JKTy0IqeK3xVE0kHE1N',
    consumer_secret: 'CR3fAOKSAa5gni8cdcJxGMF4WYZ33VtJDFVTFbYMoagZUaRUkJ',
    access_token_key: '4329553049-YSpCh21Zi8j0ZJ4XWQoyMpEaRUZuSVNefcvtd8F',
    access_token_secret: 'nq7OeQCRq8cQxBnZ1e5nDR5bWeyC4mBzlNs7qmro0Jh5q'
});

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

client.get('search/tweets', {q: 'lolcat', count: '2'}, function(error, tweets){
    console.log(tweets);
});

}).listen(port);