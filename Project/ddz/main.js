$(function(){

	var changeJSON = function(obj){
		return JSON.stringify(obj);
	};

	var changeObj = function(json){
		return JSON.parse(json);
	};

	//进房间
	//服务器传过来的JSON信息
	var roomInfo ='{"action":"room","id":"actor01"}';
	//转化为Object
	var dataRoom=changeObj(roomInfo);
	var id = dataRoom.id;
	$(".btn").eq(id.substr(id.length -1) - 1).on("click",function(){
		$(this).attr("id",id).attr("href","ready.html");
	});

	//准备中


})
