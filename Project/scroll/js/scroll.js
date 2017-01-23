/**
 * Created by etc on 2017/1/23.
 */
$(function(){
    $(".scroll_bar").on("mousedown",function(){
        var contHeight = $(".scroll_cont").children("p").height();
        var scrollHeight = $(".scroll_cont").scrollTop(100);
        console.log(contHeight);
    });
})