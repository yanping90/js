$(function(){

    var num=2;
    var $li = $(".star").find("li");
    var starOn = function(num){
        $li.each(function(idx){
            if(idx<num){
                $(this).addClass("starOn");
            } else{
                $(this).removeClass("starOn");
            }
        });
    }
    starOn(2);
    $(".star").on("mouseover","li",function(){
        starOn($(this).index()+1);
    }).on("mouseout",function(){
        starOn(num);
    }).on("click","li",function(){
        num = $(this).index()+1;
    });

})
