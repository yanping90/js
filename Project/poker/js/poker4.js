$(function () {
	var userSort = function (a, b) {
		if (a.value == b.value) {
			return a.color - b.color;
		} else {
			return b.value - a.value;
		}
	}
	var randomNum = function () {
		return Math.random() > 0.5 ? 1 : -1;
	}
	var addCard = function (color, value, name) {
		return {
			color: color,
			value: value,
			name: name
		};
	}
	var l = function (a) {
		console.log(JSON.stringify(a, null, 2));
	}
	var mappings = {
		"J": 11,
		"Q": 12,
		"K": 13,
		"A": 14,
		"2": 17
	};
	for (var i = 3; i <= 10; i++) {
		mappings[i] = i;
	}
	var cards = [];
	for (var m in mappings) {
		if (mappings.hasOwnProperty(m)) {
			for (var i = 1; i <= 4; i++) {
				cards.push(addCard(i, mappings[m], m));
			}
		}
	}
	cards.push(addCard(1, 102, "大王"));
	cards.push(addCard(1, 101, "小王"));
	cards.sort(randomNum);
	var cardsNew = [];
	for (var i = 0; i < 3; i++) {
		var sortCards = cards.splice(0, 17);
		cardsNew.push(sortCards);
	}
	cardsNew[0].sort(userSort);
	//造牌，验证牌的规则 [[1,"A"],[102,"大王"]]
	var createCards = function (arr) {
		var arrNew = [];
		for (var i = 0; i < arr.length; i++) {
			arrNew.push({
				value: arr[i][0],
				name: arr[i][1]
			});
		}
		return arrNew;
	}
	//object可以计算数组里重复的个数
	var repeatCards = function (arr) {
		var obj = {};
		for (var i = 0; i < arr.length; i++) {
			obj[arr[i].value] == undefined ? obj[arr[i].value] = 1 : obj[arr[i].value]++;
		}
		return obj;
	}

	var cardsCheck = createCards([
		[3, 3], [3, 3], [3, 3], [3, 3], [6, 4], [6, 4],
		[4, 4], [4, 4], [9, 3], [9, 3], [4, 4], [4, 4]
	]).sort(userSort);
	cardsCheck.sort(userSort);
	console.log(l(cardsCheck));

	//炸（两张）
	var zhaRule = function (cards) {
		if (cards[0].value != 102 || cards[1].value != 101) {
			return false;
		} else {
			return true;
		}
	}

	var selectCount = function (arr, selectCount) {
		var arrNew = [];
		for (var i in arr) {
			if (arr[i] == selectCount) {
				arrNew.push(arr[i]);
			}
		}
		return arrNew;
	}

	var selectCards = function (arr, selectCount) {
		var arrNew = [];
		for (var i in arr) {
			if (arr[i] == selectCount) {
				arrNew.push(i);
			}
		}
		return arrNew;
	}

	var lianCards = function (cards) {
		for (var i = 0; i < cards.length - 1; i++) {
			if (cards[i] != cards[i + 1] - 1) {
				return false;
			}
		}
		return true;
	}

	var sameRule = function (cards, cardsLength) {
		var objRepeat = repeatCards(cards);
		var arrCards = selectCards(objRepeat);
		if (cards.length != cardsLength || arrCards.length != 1) {
			return false;
		} else {
			return true;
		}
	}

	//三带一、三带二
	var threeORule = function (cards) {
		var objRepeat = repeatCards(cards);
		if (cards.length >= 3 && cards.length <= 5) {
			var time3 = selectCount(objRepeat, 3);
			var time1 = selectCount(objRepeat, 1);
			var time2 = selectCount(objRepeat, 2);
			if (time3.length == 1) {
				if (time1.length || time2.length) {
					return true;
				}
			}
		}
	}

	//顺子
	var shunRule = function (cards) {
		var objRepeat = repeatCards(cards);
		if (cards.length >= 5) {
			var time1 = selectCount(objRepeat, 1);
			var arrCards = selectCards(objRepeat,1);
			if (time1.length != cards.length) {
				return false;
			}
			return lianCards(arrCards)
		}
	}
	//连对(两张)
	var lianDuiRule = function (cards) {
		var objRepeat = repeatCards(cards);
		if (cards.length >= 6) {
			var time2 = selectCount(objRepeat, 2);
			if(time2.length>=3){
				var arrCards = selectCards(objRepeat,2);
				if (time2.length == arrCards.length) {
					return lianCards(arrCards);
				}
			}
		}
	}

//连对(三张) 三带一、三代二(二必须是对子)
	var lianThreeRule = function (cards) {
		var objRepeat = repeatCards(cards);
		if (cards.length >= 6) {
			var arrCards = selectCards(objRepeat,3);
			if(arrCards.length>=2){
				var lianCard = lianCards(arrCards);
				if(lianCard.length){
					return true;
				}
				if (cards.length == arrCards.length * 3 + arrCards.length || cards.length == arrCards.length * 3) {
					return true;
				} else if (cards.length == arrCards.length * 3 + arrCards.length * 2) {
					var time1 = selectCount(objRepeat,1);
					var time2 = selectCount(objRepeat,2);
					if (time1.length) {
						return false;
					} else if (time2.length) {
						if (time2.length == arrCards.length) {
							return true;
						}
					}
				}
			}
		}
	}
	//连对(四张张) 四带二
	var lianFourRule = function (cards) {
		var objRepeat = repeatCards(cards);
		if (cards.length >= 4) {
			var arrCount = selectCount(objRepeat,4);
			if(arrCount.length>=1){
				var lianCard = lianCards(selectCards(objRepeat,4));
				if(!lianCard){
					return false;
				}
				if (cards.length == arrCount.length * 4 + arrCount.length * 2 || cards.length == arrCount.length * 4
					|| cards.length == arrCount.length * 4 + arrCount.length) {
					return true;
				} else {
					return false;
				}
			}
		} else {
			return false;
		}
	}

	var max = function(arr){
		var i,max;
		for(i=0;i<arr.length-1;i++){
			if(arr[i]>arr[i+1]){
				max = arr[i];
			} else {
				max = arr[i];
			}
		}
		return max;
	};

	if (sameRule(cardsCheck, 2)) {
		console.log("dui过");
	} else if (zhaRule(cardsCheck)) {
		console.log("zha过");
	} else if (sameRule(cardsCheck, 3)) {
		console.log("th过");
	} else if (threeORule(cardsCheck)) {
		console.log("31过");
	} else if (sameRule(cardsCheck, 4)) {
		console.log("f过");
	} else if (shunRule(cardsCheck)) {
		console.log("shun过");
	} else if (lianDuiRule(cardsCheck)) {
		console.log("lian过");
	} else if (lianThreeRule(cardsCheck)) {
		console.log("lt过");
	} else if (lianFourRule(cardsCheck)) {
		console.log("lf过");
	} else {
		console.log("不过");
	}
})
