// Import http module
const http = require("node:http");

// Create server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!");
});

server.listen(8080, () => {
  console.log(`Sever is running!`);
});
