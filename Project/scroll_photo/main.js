$(function () {
    var timer;
	var scroll = function(){
		var steps = parseInt($(".scroll").css("margin-left"));
		if(steps>-520){
			steps=steps-6;
			$(".select").removeClass("select");
			$(".scroll_num").children().eq($(".scroll").children().eq(0).attr("id")).addClass("select");
		} else{
			steps =0;
			clearInterval(int);
			timer=setTimeout(function(){
				int = setInterval(scroll,10);
			},3000);
			$(".scroll").children().eq(0).appendTo($(".scroll"));
		}
		steps = $(".scroll").css("margin-left",steps+"px");
	}
	var int =setInterval(scroll,10);
    $(".scroll_num").on("click","li",function(){
        clearInterval(int);
        clearTimeout(timer);
    } );


})
