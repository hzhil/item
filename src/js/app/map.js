define(()=>{
	var map = new AMap.Map('container',{
            resizeEnable: true,
            zoom: 8,
            center: [116.480983, 40.0958]
       });  
        var marker = new AMap.Marker({
		    position: [116.480983, 39.989628],//marker所在的位置
		});
		//也可以在创建完成后通过setMap方法执行地图对象
		marker.setMap(map);
	return map;
})