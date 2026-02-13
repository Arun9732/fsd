// const http = require("http");

// const myserver = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.end(`<img src=""></img>`);
//   } else if (req.url == "/about") {
//     res.end("This is class of CSE");
//   }else if (req.url == "/contact") {
//     res.end("97*******");
//   }
//    else {
//     res.end("404");
//   }
// });

// myserver.listen(8002, () => console.log("Server started"));

// file by Sync method
const fs = require("fs");
// fs.writeFile("./cse.txt","hi we are here",(err)=>{
//   if (err) {
//      console.log("error", err);
//    } else{
//     console.log("created");
//    }

// });

//[Read using if {callback}]
fs.readFile("./cse.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log(result);
  }
});

// const result=fs.readFileSync("./cse.txt","utf-8");
// console.log(result);


// {appending}
// fs.appendFileSync("./cse.txt",' coder');

//{Creating new File}

fs.cpSync("./cse.txt","./b.txt");
