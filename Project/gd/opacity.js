$(function(){

    var autoTimer = 0;
    var tmd=1;

    $(".demo").on("roll",function(){

        var timer = setInterval(function(){

            tmd -= 0.1;
            if(tmd <= 0.6){
                clearInterval(timer);
                tmd = 1;
                $(".demo1").append($(".demo1").children().first());
            }

            $(".demo1").css("opacity",tmd);

        },20);

    });

    $(".demo").on("roll:auto",function(){

        autoTimer = setInterval(function(){
            $(".demo").trigger("roll");
        },2000);

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



})