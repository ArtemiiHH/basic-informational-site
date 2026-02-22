// Import http module
const http = require("node:http");

const hostname = "127.0.0.1";
const port = 8080;

// Create server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!");
});

server.listen(port, hostname, () => {
  console.log(`Sever running at http://${hostname}:${port}`);
});
