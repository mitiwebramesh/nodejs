const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//     return res.send("hey its express");
//     // return res.write("hey its express");
//     console.log('Executed');
// });

app.post('/data', (req, res) => {
    console.log(req.query);
    return res.json(req.query);

    // return res.send("hey its express");
    // console.log(req.query);
    // return res.write("hey its express");
    console.log('Executed');
});

app.get('/postdata', (req, res) => {
    // console.log(req.query);
    console.log(req.body);
    return res.send("hey its express, All");
    console.log(req.query);
    // return res.write("hey its express, All");
    console.log('Executed');
});

let server = app.listen(5000, () => {
    console.log('Server has started');
    console.log('using the server', server.address().address);
    console.log('using the port', server.address().port);
});