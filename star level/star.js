$(function(){

    var num= 1,
        $item = $(".level").find(".level-item"),
        $starSolid = $(".star-solid"),
        $starBorder = $(".star-border");
//    点亮星星
    var lightOn = function(num){
        $item.each(function(idx){
            if(idx<num){
                $(this).find($starSolid).addClass("current").siblings().removeClass("current");
            } else {
                $(this).find($starBorder).addClass("current").siblings().removeClass("current");
            }
        });
    }
    lightOn(num);
    $item.on("mouseenter",function(){
        lightOn($(this).index()+1);
    }).on("click",function(){
        num= $(this).index()+1;
    });
    $(".level").on("mouseleave",function(){
        lightOn(num);
        console.log(num);
    });

})
