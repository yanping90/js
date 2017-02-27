$(function () {
	var scroll = function(){
		var steps = parseInt($(".scroll").css("margin-left"));
		if(steps>-520){
			steps=steps-6;
		} else{
			steps =0;
			$(".scroll").children().eq(0).appendTo($(".scroll"));
		}
		steps = $(".scroll").css("margin-left",steps+"px");
	}
	setInterval(scroll,10);
})
