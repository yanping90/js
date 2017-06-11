$(function(){

    var $li = $(".star").find("li");
    var num=1.5;
    var lightOn=function(num){
        var count = parseInt(num);
        var isHalf = count != num;
        $li.each(function(idx){
            var self = $(this);
            if(idx<count){
                self.addClass("starOn");
            } else {
                self.removeClass("starOn").removeClass("starHalf");
            }
        });
        if(isHalf){
            $(".star").children().eq(count).addClass("starHalf");
        }
    }
    lightOn(num);

    $(".star").on("mouseover","li",function(){
        lightOn($(this).index(0)+0.5);
    }).on("click","li",function(){
        num=$(this).index()+0.5;
    }).on("mouseout","li",function(){
        lightOn(num);
    });


})
