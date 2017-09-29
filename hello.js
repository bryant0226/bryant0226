var http = require('http');
2
3 http.createServer(function (request, response) {
4 // Send the HTTP header
5 // HTTP Status: 200 : OK
6 // Content Type: text/plain
7 response.writeHead(200, {
8 'Content-Type': 'text/plain'
9 });
10
11 // Send the response body
12 response.end('Hello World!\n');
13
14 console.log('request.headers: \n', request.headers)
15 }).listen(8088);
16
17 // log message to Console
18 console.log('Server running at http://127.0.0.1:8088/');
19
20 // hello.js
