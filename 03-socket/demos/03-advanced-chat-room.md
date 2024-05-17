# Demo: Advanced Chat Room with Socket.IO

## Objective
Learn to enhance a basic chat room with user authentication and private messaging using Socket.IO, thereby increasing the functionality and security of the application.

## Introduction
Enhancing a basic chat application to support user authentication and private messaging allows for personalized user interactions and secure communications, important aspects of modern web applications.

---

### Step 1: Extend the Server Setup

Extend your existing Socket.IO server setup to handle more complex scenarios involving user authentication and private messaging.

**Server Code (`app.js`):**
```javascript
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

let users = {}  // Dictionary to store user sockets by username for easy access

// Listen for incoming connections
io.on('connection', socket => {
    console.log('New client connected')

    // Listen for login attempts
    socket.on('login', username => {
        users[username] = socket  // Store socket reference for sending messages directly
        socket.username = username  // Also store username on the socket for reference on disconnect
        console.log(`${username} logged in`)
    })

    // Handle private messaging between users
    socket.on('private message', ({ recipient, message }) => {
        if (users[recipient]) {
            // Send message directly to recipient's socket
            users[recipient].emit('private message', { from: socket.username, message })
        } else {
            // Notify sender if recipient is not found
            socket.emit('error', 'User not found')
        }
    })

    // Clean up on disconnect
    socket.on('disconnect', () => {
        if (socket.username) {
            delete users[socket.username]  // Remove user from users object
            console.log(`${socket.username} disconnected`)
        }
    })
})

const PORT = 3000
server.listen(PORT, () => console.log(\`Server running on port \${PORT}\`))
```

### Step 2: Create the Client Interface

Create a simple yet functional HTML client that can log in and send private messages.

**Client HTML (`public/index.html`):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Advanced Chat Room</title>
    <script src="/socket.io/socket.io.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const socket = io()

            // Login handling
            document.getElementById('login-form').addEventListener('submit', function(e) {
                e.preventDefault()
                const username = document.getElementById('username').value
                socket.emit('login', username)  // Send login information to server
            })

            // Sending private messages
            document.getElementById('message-form').addEventListener('submit', function(e) {
                e.preventDefault()
                const recipient = document.getElementById('recipient').value
                const message = document.getElementById('message').value
                socket.emit('private message', { recipient, message })  // Emit private message event
            })

            // Receiving private messages
            socket.on('private message', function({ from, message }) {
                const messageElement = document.createElement('p')
                messageElement.textContent = `From ${from}: ${message}`
                document.body.appendChild(messageElement)
            })

            // Handling errors
            socket.on('error', function(message) {
                alert(message)  // Display error messages as alerts
            })
        })
    </script>
</head>
<body>
    <h1>Socket.IO Chat</h1>
    <form id="login-form">
        <input id="username" type="text" placeholder="Enter username"><button type="submit">Login</button>
    </form>
    <form id="message-form">
        <input id="recipient" type="text" placeholder="Enter recipient username">
        <input id="message" type="text" placeholder="Enter message">
        <button type="submit">Send Message</button>
    </form>
</body>
</html>
```
