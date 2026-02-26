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
// const fs = require("fs");
// fs.writeFile("./cse.txt","hi we are here",(err)=>{
//   if (err) {
//      console.log("error", err);
//    } else{
//     console.log("created");
//    }

// });

//[Read using if {callback}]
// fs.readFile("./cse.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log(result);
//   }
// });

// const result=fs.readFileSync("./cse.txt","utf-8");
// console.log(result);


// {appending}
// fs.appendFileSync("./cse.txt",' coder');

//{Creating new File}

// fs.cpSync("./cse.txt","./b.txt");



/*<..............................{ [L-3] OS Learning Class }............................>*/

// const os=require('os');
// console.log("platform",os.platform());
// console.log("userinfo",os.userInfo());
// console.log("CPU",os.arch());
// console.log("free memory",os.freemem());
// console.log("total memory",os.totalmem());
// console.log("uptime",os.uptime());
// console.log("home dir",os.homedir());
// console.log("host name",os.hostname());



/*<..............................{ [L-3.2]  }............................>*/

const http=require('http');
const fs=require('fs');
const home=fs.readFileSync('./a.html')
const myserver=http.createServer((req,res)=>{
  res.end(home);  
})

myserver.listen(8000,()=>console.log("server is run"));