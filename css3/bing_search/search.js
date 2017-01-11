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

	//date = {year:2016,month:2}  offset=1
	var getYearMonth = function(date,offset){
		var year = date.year;
		var month = date.month+offset;
		if(month<0){
			month = Math.abs(month);
			year = year - 1 ;
		} else if(month>0 && month<12){
			month = Math.abs(month);
		} else if(month>12){
			month = Math.abs(month);
			year = year +1;
		}
		return date;
	}
});