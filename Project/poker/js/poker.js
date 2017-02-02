
$(function () {
	var randomNum = function (a) {
		return Math.floor(Math.random() * a);
	};
	var randomSort = function () {
		return Math.random() > 0.5 ? 1 : -1;
	};

	var userSort = function (a, b) {
		if (a.value == b.value) {
			return a.color - b.color;
		} else {
			return b.value - a.value;
		}
	};

	var addCard = function (name, value, color) {
		return {
			name : name,
			value: value,
			color: color
		};
	};

	var cards = [];

	cards.push(addCard("A", 101, 1));

	var arr = [
		{
			color: 3,
			value: 100,
			name: "A"
		},
		{
			color: 2,
			value: 100,
			name: "A"
		},
		{
			color: 1,
			value: 9,
			name: "9"
		},
		{
			color: 1,
			value: 102,
			name: "2"
		}
	];

	arr.sort(randomSort);
	console.log(arr);
	arr.sort(userSort);
	console.log(arr);
});
