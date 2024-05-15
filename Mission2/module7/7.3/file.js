const fs = require('fs');

// reading a file text
const readText = fs.readFileSync('./text.txt', 'utf-8')

// writing a file text
const writeText = fs.writeFileSync('./write.txt', readText + 'This is a written text')

console.log(writeText);
// console.log(readText);