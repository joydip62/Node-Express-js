const http = require('http');
const fs = require('fs');


// creating a server instance 
const server = http.createServer()

// listening on port
server.on('request', (req, res) => {
    if (req.url === '/read-file' && req.method === 'GET');

        // streaming file reading
    const readableStream = fs.createReadStream(__dirname + '/read.txt')
    readableStream.on('data', (chunk) => {
        res.statusCode = 200;
        res.write(chunk);
    })
    
    readableStream.on('end', () => {
        res.statusCode = 200;
        res.end("The stream was successfully");
    })
    
    readableStream.on('error', (error) => {
        console.log(error.message);
        res.statusCode = 500;
        res.end("Something went wrong");
    })
    
})

server.listen(5000, () => {
    console.log(`server lister on port ${server.port}`);
})