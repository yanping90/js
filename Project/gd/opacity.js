$(function(){

    var autoTimer = 0;
    var tmd=1;

    for(var i=0;i<$(".demo1").children().length;i++){
        $(".dotted").append($("<a>"));
    }

    $(".demo").on("roll",function(){

        var timer = setInterval(function(){

            tmd -= 0.1;
            if(tmd <= 0.6){
                clearInterval(timer);
                tmd = 1;
                $(".demo1").append($(".demo1").children().first());
            }

            $(".demo1").css("opacity",tmd);

        },25);

    });

    $(".demo").on("roll:auto",function(){

        autoTimer = setInterval(function(){
            $(".demo").trigger("roll");
        },4000);

    });

    $(".demo").on("mouseenter",function(){
        clearInterval(autoTimer);
        console.log("mouseenter");
    });

    $(".demo").on("mouseleave",function(){
        $(".demo").trigger("roll:auto");
        console.log("mouseleave");
    });

    $(".demo").trigger("mouseleave");

    var currentDot = 0;
    $(".dotted").on("click","a",function(){
        currentDot = $(this)-currentDot;
    });

})