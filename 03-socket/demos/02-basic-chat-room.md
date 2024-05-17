# Creating a Basic Chat Room with Socket.io

## Introduction
This guide demonstrates how to create a basic chat room application using Socket.io, which enables real-time, bidirectional and event-based communication between the browser and the server.

## Step 1: Setup Your Project
First, create a new directory for your project and initialize a new Node.js project:

```bash
mkdir socketio-chat
cd socketio-chat
npm init -y
```

## Step 2: Install Necessary Packages
Install `express` and `socket.io` which are required for the server setup:

```bash
npm install express socket.io
```

## Step 3: Create the Server
Create a file named `server.js` and set up a basic Express server with Socket.io:

```javascript
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

// Serve static files from the 'public' directory
app.use(express.static('public'))

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
  })
})

http.listen(3000, () => {
  console.log('listening on *:3000')
})
```

## Step 4: Create the Client Side
Create a `public/index.html` file in the root directory to serve the HTML content for the chat application:

```html
<!DOCTYPE html>
<html>
<head>
<title>Socket.IO Basic Chat Room</title>
</head>
<body>
<ul id="messages"></ul>
<form action="">
  <input id="message" autocomplete="off" /><button>Send</button>
</form>
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io()
  var form = document.querySelector('form')
  var input = document.querySelector('#message')
  var messages = document.querySelector('#messages')
  
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (input.value) {
      socket.emit('chat message', input.value)
      input.value = ''
    }
  })
  socket.on('chat message', function(msg) {
    var item = document.createElement('li')
    item.textContent = msg
    messages.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
  })
</script>
</body>
</html>
```

## Conclusion
You now have a basic chat room application using Socket.io. Users can connect to your server, send messages, and these messages will be broadcast to all connected users in real-time.
