/**
 * Created by etc on 2016/12/20.
 */
$(function(){
    var successText = "格式正确";
    var errorText = "格式错误";
    var nullText = "名称不能为空";

    $("#companyname").on("change",function(){
        var _self = $(this);
        var noteSpan = _self.parent().children(".noteSpan");
        noteSpan.removeClass("success").removeClass("error").show();
        if(/[旅行社有限公司]$/.test(_self.val())){
            noteSpan.addClass("success").html(successText);
        }else if(_self.val() == ""){
            noteSpan.addClass("error").html(nullText);
        }else{
            noteSpan.addClass("error").html(errorText);
        }
    });

    $("#phone").on("change",function(){
        var _self = $(this);
        var noteSpan = _self.parent().children(".noteSpan");
        if(/^[1][345678]\d{9}$/.test(_self.val())){
            noteSpan.addClass("success").html(successText);
        }else if(_self.val() == ""){
            noteSpan.addClass("error").html(nullText);
        }else{
            noteSpan.addClass("error").html(errorText);
        }
    });

    $("#password1").on("change",function(){
        var _self = $(this);
        var noteSpan = _self.parent().children(".noteSpan");
        noteSpan.removeClass("success").removeClass("error").show();
        var passText = _self.val();
        if(passText.length >=6 && passText.length <=16){
            if(/\s+/.test(passText)){
                noteSpan.addClass("error").html("不能包含空格");
            }else if(/\d{9}/.test(passText)){
                noteSpan.addClass("error").html("不能包含9个数字");
            }else{
                noteSpan.addClass("success").html(successText);
            }
        }else{
            noteSpan.addClass("error").html("字符范围6-16个之间");
        }
    });

    $("#password2").on("change",function(){
        var _self = $(this);
        var noteSpan = _self.parent().children(".noteSpan");
        noteSpan.removeClass("success").removeClass("error").empty();
        if($("#password1").val() !== _self.val()){
            noteSpan.addClass("error").html("两次输入的密码不一致，请重新输入");
        }else{
            noteSpan.addClass("success").html(successText);
        }
    });

    $(".myform").on("submit",function(e){
        if(! /[旅行社有限公司]$/.test($("#companyname").val())){
            e.preventDefault();
        }
        if(! /^[1][345678]\d{9}$/.test($("#phone").val())){
            e.preventDefault();
        }
        var passText = $("#password1").val();
        if(passText.length <6 || passText.length >16 || /\s+d{9}/.test(passText)){
            e.preventDefault();
        }
        if($("#password1").val() !== $("#password2").val()){
            e.preventDefault();
        }
    });
})


