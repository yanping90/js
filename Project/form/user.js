/**
 * Created by Chiao on 2016/12/21.
 */
$(function () {

	$("#username").on("change", function () {

		var _self = $(this);
		var noteSpan = _self.parent().children(".noteSpan");
		var userText = _self.val().replace(/\s+/g, "");
		noteSpan.removeClass("success").removeClass("error").empty();
		if (userText.length = 0) {
			noteSpan.addClass("error").html("用户名不能为空");
			return;
		} else if (userText.length < 4) {
			noteSpan.addClass("error").html("用户名长度为4-20");
			return;
		} else if (!/^[a-z]+[a-z0-9]+$/i.test(userText)) {
			noteSpan.addClass("error").html("输入英文字母、数字，需以字母开头；长度4-20");
			return;
		}else{
			noteSpan.addClass("success").html("用户名正确");
			return;
		}

	});

	$("#myform").on("submit",function(e){
		e.preventDefault();
		var userText = $("#username").val();
		if(userText.length == 0
			|| userText.length < 4
			|| !/^[a-z]+[a-z0-9]+$/i.test(userText)){
			return;
		}

		$.post("/user.php"
			, {
				action: "add"
				,username: userText
			}
			, function(){
				alert(arguments[0].message);
			}
			, "json"
		);
	});

})
