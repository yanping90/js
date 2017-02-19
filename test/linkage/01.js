var max = function () {
	var arr = [2, 3, 10, 50, 2];
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		max = Math.max(max, arr[i]);
		//max = max >arr[i] ? max : arr[i];
	}
	return max;
}
