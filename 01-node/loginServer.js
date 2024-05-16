const { createServer } = require("http");

function parseJSON(request, callback) {
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString()
    })
    request.on('end', () => {
        try {
            const data = JSON.parse(body)
            callback(null, data)
        } catch (error) {
            callback(error, null)
        }
    })
}
const server = createServer((request, response) => { 
    const logBody = (error, data) => {
        if (data.userName && data.passWord) {
            response.writeHead(200, { 'Content-type': 'text/plain' })
            response.end("Login successful")
        } else {
            response.writeHead(400, { 'Content-type': 'text/plain' })
            response.end("Invalid login")
        }
    } 
    
    if (request.method === 'POST' && request.url === '/login') {
        parseJSON(request, logBody);
    } else {
        response.end('invalid')
    }
});

server.listen(3000, () => {
  console.log("Server running on port 3000!");
});