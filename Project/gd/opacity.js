$(function(){

    var autoTimer = 0;
    var tmd=1;

    for(var i=0;i<$(".demo1").children().length;i++){
        $(".dotted").append($("<a>"));
    }
    $(".dotted").children().eq(0).addClass("active");

    $(".demo").on("roll",function(e,unit){

        for(var j=0;j<unit ;j++){
            $(".demo1").append($(".demo1").children().first());
        }
        var timer = setInterval(function(){

            unit = unit || 1;
            var i=0;
            tmd -= 0.1*unit;
            if(tmd <= 0.6){
                if(++i == unit){
                    clearInterval(timer);
                };
                tmd = 1;
            }

        },25);

        $(".active").removeClass("active");
        currentDot = (currentDot+unit)%6;
        $(".dotted").children().eq(currentDot).addClass("active");
        $(".demo1").css("opacity",tmd);

    });

    $(".demo").on("roll:auto",function(){

        autoTimer = setInterval(function(){
            $(".demo").trigger("roll");
        },4000);

    });

    $(".demo").on("mouseenter",function(){
        clearInterval(autoTimer);
    });

    $(".demo").on("mouseleave",function(){
        $(".demo").trigger("roll:auto");
    });

    $(".demo").trigger("mouseleave");

    var currentDot = 0;
    $(".dotted").on("click","a",function(){
        var len = $(this).index() - currentDot;
        if(len){
            $(".demo").trigger("roll",Math.abs(len));
        }
    });

})