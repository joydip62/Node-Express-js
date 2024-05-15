const fs = require('fs')

// reading a file text asynchronously

fs.readFile('./text.txt', (err, data) => {
    if (err) {
        throw Error('error reading file')
    }
    console.log(data);

    // writing a file text asynchronously

    fs.writeFile('./async-write-file.js', data, 'utf-8', (err, data) => { 
        if (err) {
            throw Error('error writing file')
        }
        console.log(data);
    })
})