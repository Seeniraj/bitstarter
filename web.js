var express = require('express');

var app = express.createServer(express.logger());

var fs = request('fs');
var content = fs.readFileSync('index.html');
var strContent = content.toString();
app.get('/', function(request, response) {
  response.send(strContent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
