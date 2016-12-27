/**
 * Created by etc on 2016/12/27.
 */
$(function(){

    $(".top_menu").on("mouseover","li",function(){
        $(this).children(".top_sub_menu").addClass("show");
    });
    $(".top_menu").on("mouseout","li",function(){
        $(this).children(".top_sub_menu").removeClass("show");
    });

    var stop = false;
    var scrollTop = function(){
        if(stop){
            return;
        };
        var steps = $("#scroll").scrollTop();
        if(steps < 50){
            steps += 2 ;
        }else{
            steps= 0;
            $("#scroll").children().eq(0).appendTo($("#scroll"));
            clearInterval(int);
            setTimeout(function(){
                int=setInterval(scrollTop,60);
            },1000);
        }
        steps = $("#scroll").scrollTop(steps);
    }
    var int=setInterval(scrollTop,60);
    $("#scroll").on("mouseover",function(){
        stop = true;
    });
    $("#scroll").on("mouseout",function(){
        stop = false;
    });

})