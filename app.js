const http = require('http');

// Define the host and port for the app to run on
const hostname = '0.0.0.0'; // Listen on all available interfaces, including external access
const port = 3000;

// Create the HTTP server that responds with "Hello, World!"
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, App Deployment using Terraform!\n'); // The response body
});

// The server will listen on all IP addresses (0.0.0.0) and the specified port (3000)
server.listen(port, hostname, () => {
  console.log(`Node.js app is running on http://${hostname}:${port}`);
});

