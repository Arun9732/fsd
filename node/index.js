const http = require("http");

const myserver = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end(`<img src=""></img>`);
  } else if (req.url == "/about") {
    res.end("This is class of CSE");
  }else if (req.url == "/contact") {
    res.end("97*******");
  }
   else {
    res.end("404");
  }
});

myserver.listen(8002, () => console.log("Server started"));
