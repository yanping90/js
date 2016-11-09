function myStar() {
	var i, j, n, num;
	var result = document.getElementById("result");
	for (j = 1; j < 5; j++) {
		star = "";
		num = "";
		for (n = 0; n < 5 - j; n++) {
			num = num + " ";
		}
		;
		for (i = 0; i < 2 * j - 1; i++) {
			star = star + "*";
		}
		result.innerHTML += num + star + "<br />";
	}
}