const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//     return res.send("hey its express");
//     // return res.write("hey its express");
//     console.log('Executed');
// });

app.post('/', (req, res) => {
    return res.send("hey its express");
    // return res.write("hey its express");
    console.log('Executed');
});

app.all('/', (req, res) => {
    return res.send("hey its express, All");
    // return res.write("hey its express, All");
    console.log('Executed');
});

let server = app.listen(5000, () => {
    console.log('Server has started');
    console.log('using the server', server.address().address);
    console.log('using the port', server.address().port);
});