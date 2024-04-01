var http = require('http');

http.createServer(function (req, res) {
  res.write("Fortnite.");
  res.end();
}).listen(8080);
