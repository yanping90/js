$(function(){

    var num= 2,
        $item = $(".level").find($(".level-item")),
        $current = $(".current");
//    点亮星星
    var lightOn = function(num){
        $item.each(function(idx,el){
            var _self = $(this);
            if(idx<num){
                _self.find($current).removeClass("current").siblings().addClass("current");
            }
        });
    }
    lightOn(num);
    $item.on("mouseenter",function(){
        lightOn($(this).index()+1);
    }).on("click",function(){
        num= $(this).index()+1;
    });
    $(".level").on("mouseout",function(){
        lightOn(num);
    });

})
