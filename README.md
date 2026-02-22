# Basic Node.js Multi-Page Server

This is a beginner Node.js project that serves multiple HTML pages without using Express.
The server checks the URL and returns the correct HTML file.

## Pages

- `/` → index.html
- `/about` → about.html
- `/contact-me` → contact-me.html
- Any other route → 404.html

## How to Run

1. Make sure Node.js is installed.
2. Open the project folder in a terminal.
3. Run:

```
node index.js
```

4. Visit: http://localhost:8080

## Purpose

This project is for learning:

- Basic Node.js servers
- Simple routing
- Serving HTML files with the `http` and `fs` modules
