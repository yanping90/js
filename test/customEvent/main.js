$(function(){

	$(".color").on("words:color",function(){
		$(this).css("color","#ffff00");
	});

	$("#top").on("click",function(){
		$(this).find($(".color")).trigger("words:color");
	});

	$("#middle").on("click",function(){
		$(this).find($(".color")).trigger("words:color");
	});

	$("#bottom").on("click",function(){
		$(this).find($(".color")).trigger("words:color");
	});

})