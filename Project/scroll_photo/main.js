$(function () {
    var timer;
	var leftScroll = function(){
		var steps = parseInt($(".scroll").css("margin-left"));
		if(steps>-520){
			steps=steps-6;
			$(".select").removeClass("select");
			$(".scroll_num").children().eq($(".scroll").children().eq(0).attr("id")).addClass("select");
		} else{
			steps =0;
			clearInterval(int);
			timer=setTimeout(function(){
				int = setInterval(leftScroll,10);
			},3000);
			$(".scroll").children().eq(0).appendTo($(".scroll"));
		}
		steps = $(".scroll").css("margin-left",steps+"px");
	}
    var rightScroll = function(){
        var steps =parseInt($(".scroll").css("margin-left"));
        if(steps < 520){
            steps = steps +6;
            $(".select").removeClass("select");
            $(".scroll_num").children().eq($(".scroll").children().eq(0).attr("id")).addClass("select");
        } else {
            steps =0;
            clearInterval(int);
            timer=setTimeout(function(){
                int = setInterval(rightScroll,10);
            },3000);
            $(".scroll").children().eq(0).appendTo($(".scroll"));
        }
    }
    var int =setInterval(leftScroll,10);
    $(".scroll_box").on("click:roll", function (e,s) {
        clearInterval(int);
        clearTimeout(timer);
        int =setInterval(s,10);
    });
    $(".scroll_num").on("click","li",function(){
        $(".scroll_box").trigger("click:roll",[leftScroll]);
    } );
    $(".scroll_box").on("mouseenter",function(){
        $(".scroll_btn").removeClass("hide");
    });
    $(".scroll_box").on("mouseleave",function(){
        $(".scroll_btn").addClass("hide");
    });
    $(".left_btn").on("click",function(){
        $(".scroll_box").trigger("click:roll",[leftScroll]);
    });
    $(".right_btn").on("click",function(){
        $(".scroll_box").trigger("click:roll",[rightScroll]);
    });
})
