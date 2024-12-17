const http = require('http');

// Define the host and port for the app to run on
const hostname = '0.0.0.0'; // Listen on all available interfaces, including external access
const port = 3000;

// Create the HTTP server that responds with "Hello, World!"
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); // Change content type to HTML
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>App Deployment</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
          }
          h1 {
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <h1>AWS App Deployment using Terraform</h1>
      </body>
    </html>
  `); // The response body with HTML content
});

// The server will listen on all IP addresses (0.0.0.0) and the specified port (3000)
server.listen(port, hostname, () => {
  console.log(`Node.js app is running on http://${hostname}:${port}`);
});

