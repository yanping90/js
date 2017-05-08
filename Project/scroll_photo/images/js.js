$(function(){
    var timer,autoTimer;
    var mt=0;
    $(".wordsScroll").on("rollTop",function(){
        timer = setInterval(function(){
            mt -= 2;
            if(mt<-40){
                mt=0;
                clearInterval(timer);
                $(".wordsList").append($(".wordsList").children().first());
            }
            $(".wordsList").css("marginTop",mt+"px");
        },40);
    });

    $(".wordsScroll").on("mouseenter",function(){
        clearInterval(autoTimer);
    });

    $(".wordsScroll").on("mouseleave",function(){
        autoTimer = setInterval(function(){
            $(".wordsScroll").trigger("rollTop");
        },3000);
    });

    $(".wordsScroll").trigger("mouseleave");


})
