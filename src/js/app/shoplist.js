

function list(obj,message){
//	console.log("1")
	for(var i=0,len=obj.shop_data.length;i<len;i++){
					
		var divs = document.createElement("div");
		divs.className = "dian";
		message.appendChild(divs);
					
		var dl = document.createElement("dl");
		divs.appendChild(dl);
					
		var dt = document.createElement("dt");
		dl.appendChild(dt);
		var a1 = document.createElement("a");
		dt.appendChild(a1);
		var img = document.createElement("img");
		a1.appendChild(img);
		img.src =obj.shop_data[i].shop_ico;
//		img.attribute("src",obj.shop_data[i].shop_ico)
					
		var dd = document.createElement("dd");
		dl.appendChild(dd);
		var p1 = document.createElement("p");
		var a2 = document.createElement("a");
		a2.innerHTML = obj.shop_data[i].shop_name;
		p1.appendChild(a2);
		var span1 = document.createElement("span");
		span1.innerHTML = "店铺等级";
		p1.appendChild(span1);
		var p2 = document.createElement("p");
		p2.innerHTML = obj.shop_data[i].main;
		var p3 = document.createElement("p");
		p3.innerHTML = obj.shop_data[i].addr_detail;
		dd.appendChild(p1);
		dd.appendChild(p2);
		dd.appendChild(p3);
					
		var p4 = document.createElement("p");
		divs.appendChild(p4);
		var span2 = document.createElement("span");
		p4.appendChild(span2);
		var span3 = document.createElement("span");
		p4.appendChild(span3);
		var span4 = document.createElement("span");
		p4.appendChild(span4);
		span2.innerHTML = "先行赔付";
		span3.innerHTML = "同城帮认证";
		span4.innerHTML = "人气:"+obj.shop_data[i].shop_visit+"次浏览";
					
		var btn = document.createElement("button");
		divs.appendChild(btn);
		btn.innerHTML = "进入店铺";
	}
}
