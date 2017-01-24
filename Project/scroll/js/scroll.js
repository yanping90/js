/**
 * Created by etc on 2017/1/23.
 */
$(function(){
    $(".scroll").on("mousedown",".scroll_bar",function(e){
        e.preventDefault();
        var _self = $(this);
        $(document).on("mousemove.scroll_cont",function(e){
            //滑块移动距离
            var slideHeight = e.pageY;
            //滑块可移动距离
            var slideHeights = $(".scroll_cont").height() - $(".scroll_slide").height();
            //内容可视区高度
            var contHeight = $(".scroll_cont").height();
            //内容可移动距离
            var contHeights = $(".scroll_cont p").height() - contHeight;
            //内容滚动高度
            var scrollContHeight = (slideHeight * contHeights)/slideHeights;
            $(".scroll_cont").scrollTop(scrollContHeight);
            //滑块移动距离
            var scrollContHeights = $(".scroll_cont").scrollTop();
            var slideDistance = (slideHeights * scrollContHeights)/contHeights;
            $(".scroll_slide").css("marginTop",slideDistance + "px");
        }).on("mouseup.scroll_cont",function(){
            $(document).off(".scroll_cont");
        });
    });
})