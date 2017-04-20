$(function () {
    $(".demo02 img").on("mouseenter",function () {
        $(this).css("top","-2px");
    });
    $(".demo02 img").on("mouseleave",function () {
        $(this).css("top","0");
    });
})
