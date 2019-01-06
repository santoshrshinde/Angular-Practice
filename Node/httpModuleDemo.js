var http = require('http');
var url = require('url');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'application/json', 'Content-Encoding': 'compress'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt); //end the respons
}).listen(8080); //the server object listens on port 8080