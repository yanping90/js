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

    $("#username").on("change",function(){
        //可输入英文字母、数字，需以字母开头；长度4-20！
        var _self = $(this);
        var noteSpan = _self.parent().children(".noteSpan");
        noteSpan.removeClass("error").removeClass("success").empty();
        var userText = _self.val();
        if(userText.length === 0){
            noteSpan.addClass("error").html(_self.attr("nullmsg"));
            return;
        } else if(userText.length<4){
            noteSpan.addClass("error").html(_self.attr("errormsg"));
            return;
        } else if(/^[a-z]+[a-z0-9]+$/i.test(userText)){
            noteSpan.addClass("success").html(_self.attr("sucmsg"));
        } else {
            noteSpan.addClass("error").html(_self.attr("errormsg"));
            return;
        }
        $.get(
            "/user.php"
            ,{
                username: userText
            }
            ,function(r){
                if(r.code){
                    noteSpan.addClass("success").html(_self.attr("sucmsg"));
                } else {
                    noteSpan.addClass("success").html(_self.attr("definemsg"));
                }
            }
            ,"json"
        );
    });

    $("#password").on("change",function(){
        var _self = $(this);
        var noteSpan = _self.parent().children(".noteSpan");
        var passText = _self.val();
        noteSpan.removeClass("error").removeClass("success").empty();
        if(passText.length === 0){
            noteSpan.addClass("error").html(_self.attr("nullmsg"));
        } else if(passText.length < 4){
            noteSpan.addClass("error").html(_self.attr("error1msg"));
        } else if(/\s+/.test(passText)){
            noteSpan.addClass("error").html(_self.attr("errornullmsg"));
        } else if(/[0-9]{9}/.test(passText)){
            noteSpan.addClass("error").html(_self.attr("errornummsg"));
        } else if(passText.length >20){
            noteSpan.addClass("error").html(_self.attr("error1msg"));
        } else {
            noteSpan.addClass("success").html(_self.attr("succmsg"));
        }
    });

    $("#pass_again").on("change",function(){
        var _self = $(this);
        var noteSpan = _self.parent().children(".noteSpan");
        if(_self.val() === $("#password").val()){
            noteSpan.addClass("success").html(_self.attr("succmsg"));
        } else{
            noteSpan.addClass("error").html(_self.attr("errormsg"));
        }
    });

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
                    noteSpan.addClass("error").html("错误");
                }
            }
    });
    $(".myform").on("submit",function(e) {
        e.preventDefault();
        var userNote = $("#username").parent().children(".noteSpan");
        var userText = $("#username").val();
        if (userText.length === 0) {
            userNote.addClass("error").html($("#username").attr("nullmsg"));
            return;
        } else if (userText.length < 4) {
            userNote.addClass("error").html($("#username").attr("errormsg"));
            return;
        } else if (/^[a-z]+[a-z0-9]+$/i.test(userText)) {
            userNote.addClass("success").html($("#username").attr("sucmsg"));
        } else {
            userNote.addClass("error").html($("#username").attr("errormsg"));
            return;
        }

        $.get("/user.php"
            , {
                username: $("#username").val()
            }
            , function (r) {
                if (r.code) {
                    console.log("用户名可用");
                }
            }
            , "json"
        );

        var passText = $("#password").val();
        var passNote = $("#password").parent().children(".noteSpan");
        if(passText.length === 0){
            passNote.addClass("error").html($("#password").attr("nullmsg"));
            return;
        } else if(passText.length < 4){
            passNote.addClass("error").html($("#password").attr("error1msg"));
            return;
        } else if(/\s+/.test(passText)){
            passNote.addClass("error").html($("#password").attr("errornullmsg"));
            return;
        } else if(/[0-9]{9}/.test(passText)){
            passNote.addClass("error").html($("#password").attr("errornummsg"));
            return;
        } else if(passText.length >20){
            passNote.addClass("error").html($("#password").attr("error1msg"));
            return;
        } else {
            passNote.addClass("success").html($("#password").attr("succmsg"));
        }

        var passAgainNote = $("#pass_again").parent().children(".noteSpan");
        if(passText === $("#pass_again").val()){
            passAgainNote.addClass("success").html($("#pass_again").attr("succmsg"));
        } else {
            passAgainNote.addClass("error").html($("#pass_again").attr("errormsg"));
            return;
        }

        for (var i = 0; i < $(".v").length; i++) {
            var vNote = $(".v").eq(i).parent().children(".noteSpan");
            if (reg[$(".v").eq(i).attr("datatype")] instanceof RegExp) {
                if($(".v").eq(i).val().length === 0){
                    vNote.addClass("error").html("不能为空");
                    return;
                } else if (reg[$(".v").eq(i).attr("datatype")].test($(".v").eq(i).val())) {
                    vNote.addClass("success").html("正确");
                } else {
                    vNote.addClass("error").html("错误");
                    return;
                }
            }
        }

        var areaNote = $("#provice").parent().children(".noteSpan");
        areaNote.removeClass("error").removeClass("success").empty();
        if($("#provice").attr("select") === undefined
            || $("#city").attr("select") === undefined
            || $("#area").attr("select") === undefined){
            areaNote.addClass("error").html("所在地不能为空");
        }   else {
            areaNote.addClass("success").html("正确");
        }
    });
})
