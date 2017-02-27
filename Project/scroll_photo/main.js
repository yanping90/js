$(function () {

	var scroll = function(){
		var steps = parseInt($(".scroll").css("margin-left"));
		if(steps>-520){
			steps=steps-6;
		} else{
			steps =0;
			clearInterval(int);
			setTimeout(function(){
				int = setInterval(scroll,10);
			},3000);
			$(".scroll").children().eq(0).appendTo($(".scroll"));
		}
		steps = $(".scroll").css("margin-left",steps+"px");
	}
	var int =setInterval(scroll,10);
})
