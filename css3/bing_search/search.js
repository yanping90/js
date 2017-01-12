$(function () {
	$(".search_text").on("keyup", function (e) {
		e.stopPropagation();
		$(".search_suggest").removeClass("hide");
	});
	$(".search_suggest").on("click", "li", function () {
		$(".search_text").val($(this).text());
	});
	$(document).on("click", function () {
		$(".search_suggest").addClass("hide");
	});
});

//date = {year:2016,month:2}  offset=1  //不改变传进来的值
var changeYM01 = function (d, offset) {
	var year = d.year;
	var month = d.month + offset;
	if (month <= 0) {
		month = 12 + month;
		year = year - 1;
	} else if (month > 12) {
		month = month - 12;
		year = year + 1;
	}
	return {
		year: year,
		month: month
	}
}

//引用传递会改变传进来的值,值传递不改变传进来的值。
var changeYM02 = function (d, offset) {
	d.month += offset;
	if (d.month <= 0) {
		d.month += 12;
		d.year--;
	} else if (month > 12) {
		month -= 12;
		d.year++;
	}
}
//getYearMonth({year: 2016, month: 10}, -12);

//2016-1
var changeYM03 = function(d,offset){
	new Date()
}