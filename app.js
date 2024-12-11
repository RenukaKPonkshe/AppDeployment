// app.js
const http = require('http');

// Define the host and port for the app to run on
const hostname = '127.0.0.1'; // Localhost, meaning the app will run on the EC2 instance only
const port = 3000;

// Create the HTTP server that responds with "Hello, World!"
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, App Deployment using Terraform!\n'); // The response body
});

// The server listens on port 3000
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
