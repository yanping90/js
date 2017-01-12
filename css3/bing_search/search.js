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
		var month = date.month + offset;
		if(month<0){
			month = 12+month;
			year = year - 1 ;
		} else if(month>12){
			month = month - 12;
			year = year +1;
		}
        return year+"年"+month;
	}
    $(".ym").html(getYearMonth({year:2016,month:10},-12));
});