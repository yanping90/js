/**
 * Created by etc on 2016/12/20.
 */
$(function(){
    var successText = "格式正确";
    var errorText = "格式错误";
    var nullText = "不能为空";

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
            noteSpan.addClass("error").html(_self.attr("nullmsg"));
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
                noteSpan.addClass("error").html(_self.attr("errormsg"));
            }else if(/\d{9}/.test(passText)){
                noteSpan.addClass("error").html(_self.attr("errormsg"));
            }else{
                noteSpan.addClass("success").html(successText);
            }
        }else{
            noteSpan.addClass("error").html(_self.attr("datatype"));
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
            if($("#companyname").val() ==""){
                $(".noteSpan").eq(0).addClass("error").html(nullText);
            }
            e.preventDefault();
        }
        if(! /^[1][345678]\d{9}$/.test($("#phone").val())){
            if($("#phone").val() ==""){
                $(".noteSpan").eq(1).addClass("error").html(nullText);
            }
            e.preventDefault();
        }
        var passText = $("#password1").val();
        if(passText.length <6 || passText.length >16 || /\s+d{9}/.test(passText)){
            if(passText ==""){
                $(".noteSpan").eq(2).addClass("error").html(nullText);
            }
            e.preventDefault();
        }
        if($("#password1").val() !== $("#password2").val()){
            e.preventDefault();
        }
    });
})


