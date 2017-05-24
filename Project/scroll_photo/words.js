$(function(){

    var autoTimer=0;
    var mt=0;
    var $wordsList = $(".wordsList");
    $wordsList.on("scrollTop",function(){
        var timer = setInterval(function(){
            mt-=1;
            if(mt<-16){
                mt=0;
                clearInterval(timer);
                $wordsList.append($wordsList.children().first());
            }
            $wordsList.css("marginTop",mt+"px");

        },20);
    });
    $wordsList.on("mouseleave",function(){
        autoTimer = setInterval(function(){
            $wordsList.trigger("scrollTop");
        },4000);
    });
    $wordsList.on("mouseenter",function(){
        clearInterval(autoTimer);
    });

    $wordsList.trigger("mouseleave");

})
