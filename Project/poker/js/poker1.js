$(function () {
	var randomNum = function () {
		return Math.random() > 0.5 ? 1 : -1;
	}
	var userSort = function (a, b) {
		if (a.value == b.value) {
			return a.color - b.color;
		} else {
			return b.value - a.value;
		}
	}
	//创建54张牌 color、value、name三个属性
	var cards = [];
	var addCards = function (color, value, name) {
		return {
			color: color,
			value: value,
			name: name
		};
	};

	var mappings = {
		"J": 103,
		"Q": 104,
		"K": 105,
		"A": 106,
		"2": 107
	};
	var i, j;
	for (i = 3; i <= 10; i++) {
		mappings[i] = i;
	}

	for (var m in mappings) {
		if (mappings.hasOwnProperty(m)) {
			for (j = 1; j <= 4; j++) {
				cards.push(addCards(j, mappings[m], m))
			}
		}
	}
	cards.push(addCards(1, 1000, "X"));
	cards.push(addCards(1, 2000, "Y"));
	var l = function (obj) {
		console.log(JSON.stringify(obj, null, 2));
	};

	function showCards(cards, s) {
		if (s) cards.sort(userSort);
		var $ul = $("<ul>").addClass("cards_box");
		for (i = 0; i < cards.length; i++) {
			$ul.append($("<li>").text(cards[i].name));
		}
		$ul.appendTo(document.body);
	}

	cards.sort(randomNum);

	var n, sortCards, a, i;
	var cardsNew = [];
	for (n = 0; n < 3; n++) {
		sortCards = cards.splice(0, 17);
		cardsNew.push(sortCards);
	}

	showCards(cardsNew[0], 1);
	showCards(cardsNew[1], 1);
	showCards(cardsNew[2], 1);
	showCards(cards);
})
//$(function(){
//	var randomNum = function(){
//		return Math.random() >0.5?1:-1;
//	}
//	var map = {};
//	map["j"] = 100;
//	map["q"] = 101;
//	map["k"] = 102;
//	map["a"] = 103;
//	map["2"] = 104;
//	map["x"] = 105;
//	map["X"] = 106;
//	for(var i =3;i<=10;i++){
//		map[i] = i;
//	}
//	var arr=[2,3,9,10,"j","q","k","a","x","X",4,5,6,7,8];
//	arr.sort(function(a,b){
//		return map[b] - map[a] ;
//	});
//	console.log(arr);
//})
