$(function(){

    var num= 0,
        $level = $(".level"),
        $item = $level.find($(".level-item")),
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
    //调用点亮星星
    lightOn(num);
    //绑定点亮事件
    $level.on("mouseenter","li",function(){
        lightOn($(this).index()+1);
    }).on("click","li",function(){
        num= $(this).index()+1;
    });
    $level.on("mouseleave",function(){
        lightOn(num);
        console.log(num);
    });

})
