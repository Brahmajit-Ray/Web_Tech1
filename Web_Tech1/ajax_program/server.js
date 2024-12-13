const http = require("http");
const fs = require("fs");
const path = require("path");

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        // Serve the HTML file
        const filePath = path.join(__dirname, "index.html");
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading the page");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(content);
            }
        });
    } else if (req.url === "/data") {
        // Serve the AJAX data
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello from the server!");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

// Start the server
const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
