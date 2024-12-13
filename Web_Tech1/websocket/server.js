const WebSocket = require('ws');

// Create a WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

console.log("WebSocket server is running on ws://localhost:8080");

// Handle connection events
wss.on('connection', (ws) => {
    console.log('New client connected');

    // Handle incoming messages
    ws.on('message', (message) => {
        console.log('Received:', message);

        // Echo the message back to the client
        ws.send(`Server: You sent -> ${message}`);
    });

    // Handle client disconnection
    ws.on('close', () => {
        console.log('Client disconnected');
    });

    // Handle errors
    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});
