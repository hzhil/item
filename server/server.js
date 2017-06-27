var express = require('express');
var fs = require('fs');
var app = express();
var url = require("url");
var dataBuffer = [];  ///[{1:''},{2:''}] 文件缓存区
var result = null;

app.get('/at/shop/:num',(req,res) => {
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","X-Requested-With");
	res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
	res.header('Content-type','application/json');
//	console.log('缓冲前：'+dataBuffer);
	var num = req.params.num;
	var filename = './json/'+num+'.json';
	for(var i=0;i<dataBuffer.length;i++){
		var dataObj = dataBuffer[i];
		if(num in dataObj){
			result = dataObj[num];
			break;
		}
	}
	if(result==null){
		fs.readFile(filename,(err,data) => {
			if(err){
				console.log(err);
				return;
			}
			var o={};
			o[num]=data;
			dataBuffer.push(o);
			result=data;
//			console.log('从文件中的'+result)
			res.send(result)
		})
	}else{
		res.send(result)
	}
//	console.log('缓冲后：'+dataBuffer);
//	console.log(result)
})

//jsonp 接口
app.get("/mydata",(req,res) => {
	fs.readFile("json/1.json",function(err,data){
//		console.log(data)
		var callname = url.parse(req.url).query;
//		console.log(req.url)
//		console.log(url.parse(req.url))
		callname = callname.split("=")[1];
		
		res.send(callname +"("+data+")")
	})
})

//切换城市的json接口
app.get("/city",(req,res)=>{
	fs.readFile("json/citys.json",(req,res) => {
		
	})
})

app.listen(3000,() => {
	console.log("服务器启动中...")
})



