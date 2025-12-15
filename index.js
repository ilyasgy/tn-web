const http = require("http");

http.createServer((req, res) => {
  res.end("Threatnest is live");
}).listen(process.env.PORT || 3000);
