const http = require('http')

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end('Welcome to my Node.js server!')
            break
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end('About Us')
            break
        case '/contact':
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end('Contact Us')
            break
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('404 Not Found')
    }
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
