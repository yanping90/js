/**
 * Created by etc on 2016/12/20.
 */
$(function () {
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

	$("#username").on("change", function () {
		var _self = $(this);
		var noteSpan = _self.parent().children(".noteSpan");
		noteSpan.removeClass("success").removeClass("error").show();
		var userText = (_self.val()).replace(/\s+/i, "");
		if (userText.length === 0) {
			noteSpan.addClass("error").html(_self.attr("nullmsg"));
			return;
		} else if (userText.length < 4) {
			noteSpan.addClass("error").html(_self.attr("errormsg"));
			return;
		} else if (/^[a-z]+[a-z0-9]+$/i.test(userText)) {
			//noteSpan.addClass("success").html(_self.attr("sucmsg"));
		} else {
			noteSpan.addClass("error").html(_self.attr("errormsg"));
			return;
		}

		$.get("/"
			, function () {
				console.log(arguments);
			}
		)

		$.get("/user.php"
			, {
				username: userText
			}
			, function (r) {
				if (r.code) {
					noteSpan.addClass("success").html(_self.attr("sucmsg"));
				} else {
					noteSpan.addClass("error").html(_self.attr("definemsg"));
				}
			}
			, "json"
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

	$("#phone").on("change", function () {
		var _self = $(this);
		var noteSpan = _self.parent().children(".noteSpan");
		var phoneText = _self.val();
		if (phoneText.length === 0) {
			noteSpan.addClass("error").html(_self.attr("nullmsg"));
			return;
		} else if (/^1[3,4,5,7][0-9]{9}$/.test(phoneText)) {
			noteSpan.addClass("success").html(_self.attr("sucmsg"));
		} else {
			noteSpan.addClass("error").html(_self.attr("errormsg"));
			return;
		}
	});

	$(".myform").on("submit", function (e) {
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

		var phoneText = $("#phone").val();
        var phoneNote = $("#phone").parent().children(".noteSpan");
        if (phoneText.length === 0) {
            phoneNote.addClass("error").html($("#phone").attr("nullmsg"));
            return;
        } else if (/^1[3,4,5,7][0-9]{9}$/.test(phoneText)) {
            phoneNote.addClass("success").html($("#phone").attr("sucmsg"));
        } else {
            phoneNote.addClass("error").html($("#phone").attr("errormsg"));
            return;
        }

        var areaText = $("#provice").parent().children(".noteSpan");
        areaText.removeClass("error").removeClass("success").empty();
		if($("#provice").attr("select") == undefined
			|| $("#city").attr("select") == undefined
			|| $("#area").attr("select") == undefined
		){
            areaText.addClass("error").html("没有选择地区");
		} else {
			$("#provice").parent().children(".noteSpan").addClass("success").html("正确");
		}

	});
});


