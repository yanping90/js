/**
 * Created by etc on 2016/12/21.
 */
//可输入英文字母、数字，需以字母开头；长度4-20！

$(function () {
	$("#username").on("change", function () {
		var _self = $(this);
		var noteSpan = _self.parent().children(".noteSpan");
		noteSpan.removeClass("success").removeClass("error").show();
		var passText = _self.val();
		if (_self.val().length > 4) {
			if (/^[a-z]+[a-z0-9]+$/i.test(passText)) {
				noteSpan.addClass("success").html("正确");
			} else {
				noteSpan.addClass("error").html("格式错误");
			}
		} else {
			noteSpan.addClass("error").html("请输入4-20个字符");
		}
		noteSpan.removeClass("success").removeClass("error").show();
		$.get("/user.php",
			{
				username:$("#username").val()
			},
		function (r) {
			if (r.code) {
				$(".noteSpan").addClass("success").html("用户名可用");
			} else {
				$(".noteSpan").addClass("error").html(r.message);
			}
		},
		"json"
		);
});

$(".myform").on("submit", function (e) {
	e.preventDefault();
	$.get("/user.php",
		{
			username: $("#username").val()
		},
		function (r) {
			if (r.code) {
				$(".noteSpan").addClass("error").html(r.message + "，请重新填写");
			} else {
				$(".noteSpan").addClass("success").html(r.message);
			}
		},
		"json"
	);
	$(".noteSpan").removeClass("error").removeClass("success").empty();
	if ($("#username").val().length < 4 || !/^[a-z]+[a-z0-9]+$/i.test($("#username").val())) {
		e.preventDefault();
	}
});
})
