$(function(){

    var mr=0;
    var autoTimer = 0;
    $(".demo1").on("roll:right",function(){

        var timer = setInterval(function(){
            mr-=10;
            if(mr<-520){
                mr=0;
                clearInterval(timer);
                $(".demo1").append($(".demo1").children().first());
            }
            $(".demo1").css("marginLeft",mr+"px");
        },8);

    });

    $(".demo1").on("roll:left",function(){

        mr = -520;
        $(".demo1").prepend($(".demo1").children().last());
        var timer = setInterval(function(){
            mr += 10;
            if(mr >= 0) {
                clearInterval(timer);
            }
            $(".demo1").css("marginLeft",mr+"px");
        },8);

    })

    $(".demo1").on("roll:auto",function(){

        autoTimer = setInterval(function(){
            $(".demo1").trigger("roll:right");
        },3000);

    });

    $(".demo1").on("mouseenter",function(){
        $(".btn").removeClass("hide");
        clearInterval(autoTimer);
    });
    $(".demo1").on("mouseleave",function(){
        //$(".btn").addClass("hide");
        $(".demo1").trigger("roll:auto");
    });

    $(".rightBtn").on("click",function(e){
        e.stopPropagation();
        $(".demo1").trigger("roll:left");
    });

    $(".leftBtn").on("click",function(e){
        e.stopPropagation();
        $(".demo1").trigger("roll:right");
    });

})
