# Exercise: Establish WebSocket Connection with Socket.IO

## Objective
Learn to set up a basic WebSocket connection between a client and a server using Socket.IO, focusing purely on establishing the connection without handling any messages.

## Task
Create a simple server and client system where the client can connect to the server using Socket.IO. The exercise will focus on confirming that a connection has been established.

## Instructions
1. **Install Socket.IO**:
   - Initialize a new Node.js project if you haven't already.
   - Install Socket.IO in your project by running `npm install socket.io`.

2. **Set Up the Server**:
   - Create an Express server.
   - Integrate Socket.IO with your server to handle WebSocket connections.

3. **Server Implementation**:
   - Implement an event listener for the 'connection' event to log a message when a client connects.

4. **Create a Client to Test the Connection**:
   - Develop a simple HTML page that connects to your Socket.IO server using the provided client-side Socket.IO library.
   - Ensure the client can establish a connection and visually confirm the connection status on the web page without sending or receiving any messages.

5. **Testing**:
   - Run your server and open the HTML client in a browser.
   - Observe whether the connection status is successfully indicated in the client's web interface.

## Expected Output
- The server should log "New client connected" when a client connects.
- The client web page should display a confirmation that it is connected to the server.
