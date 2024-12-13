const http = require('http');

// Create an HTTP agent for keep-alive
const agent = new http.Agent({ keepAlive: true });

// Define the options for the HTTP request
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
  agent: agent, // Use the keep-alive agent
};

// Function to make a request
function makeRequest(path) {
  options.path = path;

  const req = http.request(options, (res) => {
    console.log(`Status: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`Body: ${chunk}`);
    });
  });

  req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
  });

  req.end();
}

// Make multiple requests over the same connection
makeRequest('/first');
makeRequest('/second');
makeRequest('/third');
