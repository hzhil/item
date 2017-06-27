
requirejs.config({
	baseUrl:"js/lib",
	paths:{
		app:"../app",
		shopurl:"../app/shopurl",
		shoplist:"../app/shoplist",
		loop:"../app/move",
		maps:"../app/map"
	},
	shim:{
		shoplist:{
			exports:"list"
		},
		loop:{
			exports:"loops"
		}
	}
})

define(["shopurl","shoplist","loop","maps"],(a,b,c,d) => {
	console.log(d)
	c();
	var message = document.querySelector(".message");
	var xhr = new XMLHttpRequest();
	var urls = a.host+a.shopPath;
	xhr.open("get",urls+"/2");
	xhr.send(null);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status >= 200&&xhr.status < 300||xhr.status == 304){
				var obj =JSON.parse(xhr.responseText)
				b(obj,message);
			}
		}
	}
})
