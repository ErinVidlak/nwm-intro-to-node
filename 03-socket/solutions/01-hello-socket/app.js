const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

// Serve static files from the 'public' directory
app.use(express.static('public'))

// Handle WebSocket connections
io.on('connection', socket => {
    console.log('New client connected')
    socket.on('disconnect', () => {
        console.log('Client disconnected')
    })
})

const PORT = 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
