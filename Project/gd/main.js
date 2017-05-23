$(function(){

    var autoTimer = 0;
    var tmd=1;

    $(".demo").on("roll",function(){

        var timer = setInterval(function(){

            tmd -= 0.1;
            $(".demo1").css("opacity",tmd);
            if(tmd <= 0.8){
                clearInterval(timer);
                tmd = 1;
                $(".demo1").append($(".demo1").children().first());
            }

        },80);

    });

    $(".demo").on("roll:auto",function(){

        autoTimer = setInterval(function(){
            $(".demo").trigger("roll");
            console.log(1);
        },3000);

    });

    $(".demo").trigger("roll:auto");


})