let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer(function (request, response) {
    const path = url.parse(request.url).pathname;
    if (path == '/') {
        response.write('This is Root');
        response.end();
    } else if (path == '/home') {
        fs.readFile('sample.txt', (err, data) => {
            response.write(data.toString());
            response.end();
        })
        response.write('This is Home')
    } else if (path == '/aboutus') {
        response.write('This is about us');
        response.end();
    }
    console.log('Get Some Request from ', path);
    // response.write('Hello World');

}).listen(5000);