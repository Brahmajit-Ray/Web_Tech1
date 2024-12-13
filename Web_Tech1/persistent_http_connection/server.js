const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  console.log(`Received request for: ${req.url}`);

  // Set headers to keep the connection alive
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Connection': 'keep-alive', // Keeps the connection alive
  });

  // Respond with a message
  res.end(`Response for ${req.url}`);
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
