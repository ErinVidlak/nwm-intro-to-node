const { createServer } = require("http");

const server = createServer((request, response) => {
  // console.log(request.method + request.url);
  
  // console.log("server called");
  // response.statusCode = 200;
  // response.setHeader('Content-Type', 'text/plain');

  // response.writeHead(200, {'Content-Type': 'text/plain'})
  
  // if (request.url === '/') {
  //   response.end('Welcome to our page!')
  // }
  // else if (request.url === '/about') {
  //   response.end('About Us')
  // } else if (request.url === '/contact') {
  //   response.end('Contact Us')
  // } else {
  //   response.end('404 Not Found!');
  // }

  switch (request.method) {
    case "GET":
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("GET method");
      break;
    case "POST":
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("POST method");
      break;
    case "PUT":
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("PUT method");
      break;
    case "DELETE":
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("DELETE method");
      break;
    default:
      response.writeHead(405, { "Content-Type": "text/plain" });
      response.end("Method not supported");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000!");
});