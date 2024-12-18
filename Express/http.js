const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const val = parsedUrl.query.val;
  const result = [];

  for (let i = 1; i <= 10; i++) {
    result.push(i * val);
  }

  res.writeHead(200, { "Content-type": "text/html" });
  res.write(`<h1>${result}</h1>`);
  res.end();
});

server.listen(3000, () => console.log("Connected"));
