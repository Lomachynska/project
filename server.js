const http = require('http');

const server = http.createServer((req, res) => {
  // Обробити HTTP-запит

  res.end('Hello, world!');
});

server.listen(8080);
