const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Welcome to my Node.js server!')
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('404 Not Found')
    }
})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
