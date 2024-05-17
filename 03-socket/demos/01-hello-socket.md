# Demo: Hello Socket with Socket.IO

## Objective
Learn how to install and configure Socket.IO to set up a basic connection between a client and server.

## Step 1: Install Socket.IO
Install Socket.IO in your Node.js application:
```bash
npm install socket.io
```

## Step 2: Set Up a Basic Server
Create a basic server using Express and attach Socket.IO to it.

```javascript
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

io.on('connection', (socket) => {
    console.log('New client connected')

    socket.on('disconnect', () => {
        console.log('Client disconnected')
    })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
```

## Step 3: Create an HTML Client to Test the Connection
Set up a simple HTML client that uses Socket.IO to connect to your server.

### Client HTML Code
Create an HTML file named `index.html` and include the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Socket.IO Test Client</title>
    <script src="/socket.io/socket.io.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var socket = io('http://localhost:3000')

            socket.on('connect', function() {
                console.log('Connected to the server!')
            });

            socket.on('disconnect', function() {
                console.log('Disconnected from the server!')
            })
        })
    </script>
</head>
<body>
    <h1>Socket.IO Client</h1>
    <p>Check the console for connection status.</p>
</body>
</html>
```

### Serve the HTML File from Your Express App
Add a route to your Express application to serve this HTML file:

```javascript
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
```

### Test the Connection
1. Open the HTML file in a web browser.
2. Open the browser's console to see messages about the connection status.
