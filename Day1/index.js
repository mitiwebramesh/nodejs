let fs = require('fs');

// console.log('File Read Started');
// let data = fs.readFileSync('sample.txt');
// console.log(data);
// console.log('Program Complete');


console.log('File Read Started');
fs.readFile('sample.txt', function (err, data) {
    if (null) {
        console.log('error occured', err);

    }
    else {
        console.log(data);
    }

});
fs.readFile('sample2.txt', function (err, data) {
    if (null) {
        console.log('error occured', err);

    }
    else {
        console.log(data);
    }

});


console.log('Program Complete');