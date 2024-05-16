const http = require('http')

// Helper function to parse JSON from request body
function parseJSON(req, callback) {
    let body = ''
    req.on('data', chunk => {
        body += chunk.toString() // convert Buffer to string
    })
    req.on('end', () => {
        try {
            const data = JSON.parse(body)
            callback(null, data)
        } catch (error) {
            callback(error)
        }
    })
}

const server = http.createServer((req, res) => {
    const path = req.url.replace(/^\/+|\/+$/g, '')

    if (req.method === 'POST' && path === 'login') {
        parseJSON(req, (err, data) => {
            if (err) {
                res.writeHead(400, { 'Content-Type': 'text/plain' })
                res.end('Invalid JSON')
                return
            }
            const { username, password } = data
            if (username && password) {
                res.writeHead(200, { 'Content-Type': 'text/plain' })
                res.end('Login Successful!')
            } else {
                res.writeHead(400, { 'Content-Type': 'text/plain' })
                res.end('Login Failed: Username and password are required.')
            }
        })
    } else if (req.method === 'PUT' && path === 'update') {
        parseJSON(req, (err, data) => {
            if (err) {
                res.writeHead(400, { 'Content-Type': 'text/plain' })
                res.end('Invalid JSON')
                return
            }
            const { username, email } = data
            if (username && email) {
                res.writeHead(200, { 'Content-Type': 'text/plain' })
                res.end('Update Successful!')
            } else {
                res.writeHead(400, { 'Content-Type': 'text/plain' })
                res.end('Update Failed: Username and email are required.')
            }
        })
    } else if (req.method === 'DELETE' && path === 'delete') {
        parseJSON(req, (err, data) => {
            if (err) {
                res.writeHead(400, { 'Content-Type': 'text/plain' })
                res.end('Invalid JSON')
                return
            }
            const { username } = data
            if (username) {
                res.writeHead(200, { 'Content-Type': 'text/plain' })
                res.end('Deletion Successful!')
            } else {
                res.writeHead(400, { 'Content-Type': 'text/plain' })
                res.end('Deletion Failed: Username is required.')
            }
        })
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' })
        res.end('Method Not Allowed')
    }
})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
