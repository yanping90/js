/**
 * Created by etc on 2017/1/3.
 */
$(function(){
    $(".shopClass_item").on("click",function(){
        $(".shopClass_active").removeClass("shopClass_active");
        $(this).addClass("shopClass_active");
        $(".shopClass_list").removeClass("hide");
    });
})
