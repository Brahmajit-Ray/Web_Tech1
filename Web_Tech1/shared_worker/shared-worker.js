// Create a list of connected ports
const ports = [];

// Handle connections from clients
self.onconnect = (event) => {
    const port = event.ports[0];
    ports.push(port);

    port.start(); // Start the communication
    
    port.onmessage = (event) => {
        const message = event.data;
        console.log('Worker received:', message);

        // Broadcast the message to all connected ports
        ports.forEach((connectedPort) => {
            connectedPort.postMessage(`Broadcast: ${message}`);
        });
    };

    
};
