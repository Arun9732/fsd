const http = require("http");

const myserver = http.createServer((req, res) => {
  if (req.url == "/Home") {
    res.end(`<img src=""></img>`);
  } else if (req.url == "/work") {
    res.end("This is class of CSE");
  }
   else {
    res.end("404");
  }
});

myserver.listen(8003, () => console.log("Server started"));