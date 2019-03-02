let http = require('http');
let url = require('url');

http.createServer(function (request, response) {
    const path = url.parse(request.url).pathname;
    if (path == '/') {
        response.write('This is Root')
    } else if (path == '/home') {
        response.write('This is Home')
    } else if (path == '/aboutus') {
        response.write('This is about us');
    }
    console.log('Get Some Request from ', path);
    // response.write('Hello World');
    response.end();
}).listen(5000);