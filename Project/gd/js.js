$(function(){

    var mr=0;
    var autoTimer = 0;
    for(var i=0;i<$(".demo1").children().length;i++){
        $(".dotted").append($("<a>"));
    }
    $(".dotted").children().eq(0).addClass("active");

    $(".demo").on("roll:right",function(e,unit){
        var i=0;
        unit = unit || 1;
        var timer = setInterval(function(){
            mr-=10*unit;
            if(mr<-520){
                if(++i == unit){
                    clearInterval(timer);
                }
                mr=0;
                $(".demo1").append($(".demo1").children().first());
            }
            $(".demo1").css("marginLeft",mr+"px");
        },8);

        $(".active").removeClass("active");
        currentDot=(currentDot+unit)%3;
        $(".dotted").children().eq(currentDot).addClass("active");

    });

    $(".demo").on("roll:left",function(e,unit){
        unit = unit || 1;
        mr = -520*unit;
        for(var i=0;i<unit;i++){
            $(".demo1").prepend($(".demo1").children().last());
        }
        var timer = setInterval(function(){
            mr += 10*unit;
            if(mr >= 0) {
                clearInterval(timer);
            }
            $(".demo1").css("marginLeft",mr+"px");
        },8);

        $(".active").removeClass("active");
        currentDot=(3+currentDot-unit)%3;
        $(".dotted").children().eq(currentDot).addClass("active");

    })

    $(".demo").on("roll:auto",function(){

        autoTimer = setInterval(function(){
            $(".demo").trigger("roll:right");
        },3000);

    });

    $(".demo").on("mouseenter",function(){
        $(".btn").removeClass("hide");
        clearInterval(autoTimer);
    });
    $(".demo").on("mouseleave",function(){
        $(".btn").addClass("hide");
        $(".demo").trigger("roll:auto");
    });

    $(".rightBtn").on("click",function(e){
        e.stopPropagation();
        $(".demo").trigger("roll:left");
    });

    $(".leftBtn").on("click",function(e){
        e.stopPropagation();
        $(".demo").trigger("roll:right");
    });

    var currentDot = 0;
    $(".dotted").on("click","a",function(){
        var len = $(this).index()-currentDot;
        $(".demo").trigger(len>0?"roll:right":"roll:left",Math.abs(len));
    });

    $(".demo").trigger("mouseleave");

})
