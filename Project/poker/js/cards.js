$(function(){

	var userSort = function (a, b) {
		return b - a;
	};

	var arr = [10, 2, 5, 3, 10, 7, 7, 6];
	arr.sort(userSort);
	for(var c=0;c<arr.length;c++){
		$(".cards").append($("<li>").append($("<input type='checkbox'>")));
		$(".cards").children().eq(c).append(arr[c]);
	}

	var arrSelect = [];
	$(".cards").on("click","li",function(){
		arrSelect.push($(this).text());
	});

})
