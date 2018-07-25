/*var dgram = require("dgram");
var server = dgram.createSocket("udp4");

server.on("error", function (err) {
  console.log("server error:\n" + err.stack);
  server.close();
});

server.on("message", function (msg, rinfo) {
  console.log("server got: " + msg  + " from " +
    rinfo.address + ":" + rinfo.port);
});

server.on("listening", function () {
  var address = server.address();
  console.log("server listening " +
      address.address + ":" + address.port);
});

server.bind(41234);*/


let express = require("express");


let app = express();

app.all('*', function(req, res, next) {  //all是匹配当前所有 use是匹配当前和当前之后路径所有 如all："/a" 时只能匹配/a的get和post
	 if (req.path == "/" && !req.path.includes(".")) {  //匹配不是访问根目录和路径没有.的请求
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Content-Type", "application/json;charset=utf-8");
	 }
    next();
});

//app.use(express.static("public"));
app.all("/",function(req,res){  //myfile是限制前台只能上传名为myfile的文件（name）
    res.send("hello world");	
});

app.listen(3000);