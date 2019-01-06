var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    fs.readFile('fileToRead.html', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        fs.appendFile('file.html', data, function (err) {
            if (err) throw err;
            response.end();
        });
        fs.open('mynewfile2.txt', 'w', function (err, file) {
            if (err) throw err;
            console.log('Saved!');
        });
       /*  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
            if (err) throw err;
            console.log('Saved!');
        }); */
        fs.appendFile('mynewfile3.txt', ' This is my text.', function (err) {
            if (err) throw err;
            console.log('Updated!');
          });
    });


}).listen(8080);