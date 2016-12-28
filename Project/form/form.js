/**
 * Created by etc on 2016/12/28.
 */
$(function(){

    $(".area").linkage(
        {
            newSubmenu: "subMenu"
            , callback: function () {
            $("#provice").attr("select",$(".linkage-menu").eq(0).attr("select"))
                .val($(".linkage-btn").eq(0).text());
            $("#city").attr("select",$(".linkage-menu").eq(1).attr("select"))
                .val($(".linkage-btn").eq(1).text());
            $("#area").attr("select",$(".linkage-menu").eq(2).attr("select"))
                .val($(".linkage-btn").eq(2).text());
        }
        }
    );

    var reg = {
        phone: /^1[3,4,5,7][0-9]{9}$/
        , qq: /^\d{5,}$/
        , tel: /^\d{3}-\d{8}$/
        , email: /^([0-9a-z]+-)*[0-9a-z]+@([0-9a-z]+\.)+[a-z]{2,6}$/i
    };

    $(".v").on("change",function() {
        var _self = $(this);
        var noteSpan = _self.parent().children(".noteSpan");
        noteSpan.removeClass("success").removeClass("error").empty();
            if (reg[_self.attr("datatype")] instanceof RegExp) {
                if (reg[_self.attr("datatype")].test(_self.val())) {
                    noteSpan.addClass("success").html("正确");
                } else {
                    noteSpan.addClass("error").html("失败");
                }
            }
    });
    $(".myform").on("submit",function(e) {
        e.preventDefault();
        for (var i = 0; i < $(".v").length; i++) {
            var noteSpan = $(".v").eq(i).parent().children(".noteSpan");
            if (reg[$(".v").eq(i).attr("datatype")] instanceof RegExp) {
                if (reg[$(".v").eq(i).attr("datatype")].test($(".v").eq(i).val())) {
                    noteSpan.addClass("success").html("正确");
                } else {
                    noteSpan.addClass("error").html("失败");
                }
            }
        }
    });
})
