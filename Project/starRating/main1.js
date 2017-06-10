$(function(){

    var $li = $(".star").find("li");
    var num=4;
    var lightOn=function(num){
        var count = parseInt(num);
        var isHalf = count != num;
        $li.each(function(idx){
            var self = $(this);
            if(idx<count){
                self.addClass("starOn");
            } else {
                self.removeClass("starOn");
            }
        });
        if(isHalf){
            $(".star").children().eq(count).addClass("starHalf");
        }
    }
    lightOn(num);

})
