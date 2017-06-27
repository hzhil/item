

function loops(){
	var banner = document.querySelector(".move");
	var lis = document.querySelectorAll(".moveBox>ul>li");
	
	var autoTimer,changeTimer,outTimer,timer1;
	var x = 0;
	var num = 0;
	
	setTimeout(function(){
		autoMove()
	},3000)
//	autoMove()
	function autoMove(){
		autoTimer = setInterval(function(){
			banner.style.left = -x+"px";
			if (x>=4800) {
				x=0
			}
			changeLi(num)
			if(x%1200==0){
				num++
				if (num>4) {
					num=0
				}
				clearInterval(autoTimer)
				outTImer = setTimeout(function(){
					autoMove()
				},3000)
			}
			x+=10;
		},30)
	}
	function changeLi(index){
		for (var i = 0 ; i < lis.length ; i ++) {
			lis[i].style.background = "";
			lis[index].style.background = "red";
		}
	}
	function mouseChange(){
		var start = 0;
		var step = 50;
		var nowLeft = banner.offsetLeft;//获取图片载体距离左侧距离；
		var endLeft = -num*1200;//最终位置；
		var changeL = endLeft-nowLeft//完成此动画需移动多少距离
		//每一步走得像素
		var everyStep = changeL/step;
		changeTimer = setInterval(function(){
			start++;
			var l = banner.offsetLeft+everyStep;
			if (start>step) {
				clearInterval(changeTimer);
				l = endLeft;
				x= -banner.offsetLeft
				timer1 = setTimeout(function(){
					autoMove()
				},2000)
			}
			banner.style.left = l+"px";
		},30)
	}
	for (var i = 0 ; i < lis.length ; i++) {
		lis[i].suoyin = i;
		lis[i].onmouseover = function(){
			clearInterval(autoTimer)
			clearInterval(changeTimer)
			clearTimeout(outTImer)
			clearTimeout(timer1)
			num = this.suoyin;
			mouseChange()
			changeLi(num)
		}
	}
		
	/*
	 * 应用场景
	 * 1、可以获取到初始位置    元素.offsetLeft;offsetTop;
	 * 2、可以获取到结束位置；
	 * 3、设计完成这段动画的步数；
	 * 
	 */

}