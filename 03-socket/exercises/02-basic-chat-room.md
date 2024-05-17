# Exercise: Build a Real-Time Communication System with Socket.IO

## Objective
Develop a real-time communication system using Socket.IO to understand how to establish and manage WebSocket connections between a server and clients.

## Task
Create a basic chat system where multiple clients can connect to a server and send messages that are instantly visible to all connected clients.

## Instructions
1. **Set Up Your Socket.IO Server**:
   - Initialize a new Node.js project and install Socket.IO.
   - Create an Express server and integrate Socket.IO.
   - Implement event listeners for `connection`, `message`, and `disconnect` events.

2. **Develop the Client Interface**:
   - Create an HTML file to serve as the client interface for sending and receiving messages.
   - Use JavaScript to handle events such as connecting to the server, sending messages, and receiving messages.

3. **Implement Real-Time Messaging**:
   - When a client sends a message, the server should broadcast it to all connected clients.
   - Ensure all messages are displayed in real-time on each client's interface.

4. **Testing**:
   - Open multiple tabs or different browsers to simulate multiple clients.
   - Test sending messages from one client and ensure they appear instantly on all other connected clients.

## Expected Output
- A functional real-time chat system where multiple clients can send and receive messages instantly.
