// // Import Node tools
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// // Create server
// const server = http.createServer((req, res) => {
//   // Store name of HTML file
//   let filePath = "";

//   // Routing logic
//   if (req.url === "/") {
//     filePath = "index.html";
//   } else if (req.url === "/about") {
//     filePath = "about.html";
//   } else if (req.url === "/contact-me") {
//     filePath = "contact-me.html";
//   } else {
//     filePath = "404.html";
//   }

//   // Read file and send to browser
//   fs.readFile(path.join(__dirname, filePath), (err, data) => {
//     // If reading fails send error
//     if (err) {
//       res.writeHead(500, { "Content-Type": "text/html" });
//       res.end("Server error");
//       return;
//     }

//     const statusCode = filePath === "404.html" ? 404 : 200;

//     // Send HTML content back
//     res.writeHead(statusCode, { "Content-Type": "text/html" });
//     // End response and sen data back to browser
//     res.end(data);
//   });
// });

// // Start listening on port 8080
// server.listen(8080, () => {
//   console.log("Server running at http://localhost:8080");
// });



// Rewrite logic using Express