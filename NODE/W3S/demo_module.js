var http = require('http');
var dt=require('./myFirstModule.js');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("the date is:"+dt.myFirstDate());;
  res.end();
}).listen(8080);