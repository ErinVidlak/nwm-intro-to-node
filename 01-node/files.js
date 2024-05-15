const fs = require('fs');

console.log(fs);

readFile('example.txt', 'utf8', (error, data) => {
    if (error) {
        console.log(error)
    }
})