const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

// Middleware to serve the static HTML file.
app.use(express.static('public'))

let users = {}  // Store username and socket mapping

io.on('connection', (socket) => {
    console.log('New client connected')

    socket.on('login', (username) => {
        users[username] = socket.id // Map the username to their socket id
        socket.username = username; // Store username on the socket session
        console.log(`${username} logged in with ID: ${socket.id}`)
    });

    socket.on('private message', ({ recipient, message }) => {
        if (users[recipient]) {
            io.to(users[recipient]).emit('private message', { from: socket.username, message })
            console.log(`Message from ${socket.username} to ${recipient}: ${message}`)
        } else {
            socket.emit('error', 'User not found')
        }
    })

    socket.on('disconnect', () => {
        console.log(`${socket.username || 'Client'} disconnected`)
        delete users[socket.username]  // Remove user from list
    })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
