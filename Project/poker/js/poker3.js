$(function () {

	var userSort = function (a, b) {
		return b - a;
	};

	var randomNum = function () {
		return Math.random() > 0.5 ? 1 : -1;
	};

	var max = function (arr) {
		// return Math.max.apply(null, [1,2,3]);

		var i, max;
		max = arr[0];

		for (i = 1; i < arr.length; i++) {
			max = arr[i] > max ? arr[i] : max;
		}
		return max;
	};

	var mappingsToNum = {
		J: 11,
		Q: 12,
		K: 13,
		A: 14,
		2: 20
	};

	for (var i = 3; i <= 10; i++) {
		mappingsToNum[i] = i;
	}

	var cards = [];
	for (var m in mappingsToNum) {
		for (var j = 1; j <= 4; j++) {
			cards.push(mappingsToNum[m] + "0" + j);
		}
	}

	cards.push("3001");
	cards.push("4001");
	mappingsToNum["X"] = 30;
	mappingsToNum["Y"] = 40;
	var mappingsToCard = {
		11: "J",
		12: "Q",
		13: "K",
		14: "A",
		20: "2"
	};
	for (var c = 3; c <= 10; c++) {
		mappingsToCard[c] = c;
	}
	mappingsToCard["30"] = "X";
	mappingsToCard["40"] = "Y ";
	cards.sort(randomNum);
	var cardsNew = [];
	for (var c = 0; c < 3; c++) {
		var newCards = cards.splice(0, 17);
		cardsNew.push(newCards);
	}

	//牌转换成数字
	var cardToNum = function (card) {
		return mappingsToNum[card];
	};

	//数字环换成牌
	var numToCard = function (num) {
		var numValue = num.substr(0, num.length - 2);
		return mappingsToCard[numValue];
	};

	//造牌
	var arrNum = ["5","5"];
	arrNum.sort(userSort);

	//计算重复的牌
	var countCard = function(cards){
		var obj={};
		for(var i=0;i<cards.length;i++){
			obj[cards[i]] == undefined ?obj[cards[i]] = 1:obj[cards[i]]++;
		}
		return obj;
	};

	//计算每张牌出现的次数
	var eachCount = function(obj){
		var arr=[];
		for(var o in obj){
			arr.push(obj[o]);
		}
		return arr;
	}
	//计算出现次数的每张牌
	var eachCard = function(obj){
		var arr=[];
		for(var o in obj){
			arr.push(o);
		}
		return arr;
	}
	//顺子
	var shunCard = function (arr) {
		for(var i=0;i<arr.length-1;i++){
			if(arr[i] !=arr[i+1]-1 ){
				return console.log("false");
			}
		}
		return console.log("true");
	}
	//指定牌重复次数为几的
	var selectCount = function (cards,selectValue) {
		for(var i=0;i<cards.length;i++){
			if(cards[i] !=selectValue){
				return console.log("false");
			}
		}
		return console.log("true");
	}

	var eachCards = eachCard(countCard(arrNum));
	var eachCounts = eachCount(countCard(arrNum));
	console.log(eachCards);
	console.log(eachCounts);
	//规则
	var maxCount = max(eachCounts);
	if(arrNum.length ==1){
		return console.log("true");
	}
	if(maxCount ==1){
		//大小王
		if(arrNum[0]=="4001" && arrNum[1]=="3001"){
			return console.log("true");
		}
		//顺子
		if(arrNum.length>=5){
			return shunCard(eachCards);
		}

	} else if(maxCount ==2){
		//对子、连对
		if(arrNum.length==2){
			return console.log("true");
		} else if(arrNum.length>=6){
			return selectCount(eachCards,2);
		}
	} else if(maxCount ==3){
		//三带一、三带二、飞机
	} else if(maxCount ==4){
		//炸、四带二、四带三
	}

})