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
        var noteSpan = $("#username").parent().children(".noteSpan");
		var userText = $("#username").val();
		if (userText.length === 0
			|| userText.length < 4
			|| !/^[a-z]+[a-z0-9]+$/i.test(userText)) {
            noteSpan.addClass("error").html($("#username").attr("nullmsg"));
			return;
		}

		$.get("/user.php"
			, {
				username: $("#username").val()
			}
			, function (r) {
				if (r.code) {
					alert("注册成功");
				}
			}
			, "json"
		);

		var phoneText = $("#phone").val();
		if (phoneText.length === 0
			|| !/^1[3,4,5,7][0-9]{9}$/.test(phoneText)) {
			return;
		}

		$(".noteSpan").removeClass("error").removeClass("success").empty();
		if($("#provice").attr("select") == undefined
			|| $("#city").attr("select") == undefined
			|| $("#area").attr("select") == undefined
		){
			$("#provice").parent().children(".noteSpan").addClass("error").html("没有选择地区");
			return;
		} else {
			$("#provice").parent().children(".noteSpan").addClass("success").html("正确");
		}

	});
});


