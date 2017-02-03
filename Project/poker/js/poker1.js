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
		"J": 11,
		"Q": 12,
		"K": 13,
		"A": 14,
		"2": 15
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
	cards.push(addCards(1, 16, "X"));
	cards.push(addCards(1, 17, "Y"));
	var l = function (obj) {
		console.log(JSON.stringify(obj, null, 2));
	};

	function showCards(cards, s) {
		if (s) cards.sort(userSort);
		var $ul = $("<ul>").addClass("cards_box");
		for (i = 0; i < cards.length; i++) {
			$ul.append($("<li>").text(cards[i].name).attr("value",cards[i].value));
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

    //判断发牌规则
    var cardStr;
    $(".cards_box").on("click","li",function(){
        $(this).addClass("checked");
        cardStr = $(".checked").text();
    });

    var cardsCheck = [
        {
            value:"7",
            name:"3"
        },
        {
            value:"7",
            name:"3"
        },
        {
            value:"7",
            name:"3"
        },
        {
            value:"8",
            name:"3"
        },
        {
            value:"7",
            name:"3"
        },
        {
            value:"8",
            name:"3"
        }
    ];
    cardsCheck.sort(userSort);
    console.log(l(cardsCheck));
    //顺子
    var cardsShun = function(cards){
        var count = 0,j=0;
        for(j;j<cards.length -1 ;j++){
            if(cards[j].value >2 && cards[j].value <14){
                if(cards[j].value - cards[j+1].value == 1){
                    count ++;
                }
            }
        }
        if(count >= cards.length - 1){
            $(".cards_tit").html("顺子");
        }
    }
    //连对(两张)
    var cardsContinueTow = function(cards){
        var count = 0,i;
        for(i =0;i<cards.length -2 ; i++){
            if(cards[i].value - cards[i+2].value == 1
                && cards[i].value == cards[i+1].value){
                i++;
                count++;
            }
        }
        if(count == cards.length/2 -1){
            $(".cards_tit").html("连对正确");
        }
    }
    //连对(三张)
    var cardsContinueThree = function(cards){
        var count = 0,i;
        for(i =0;i<cards.length -2 ; i++){
            if(cards[i].value - cards[i+3].value == 1){
                for(var j=0;j<3;j++){
                    if(cardsCheck[j] != cardsCheck[j+1]){
                        $(".cards_tit").html("连对(三)错误");
                        return;
                    }
                }
                count++;
            }
        }
        if(count == cards.length/2 -1){
            $(".cards_tit").html("连对正确");
        }
    }
    var count4 = 0,count6=0;
    if(cardsCheck.length == 2){
        if(cardsCheck[0].value == cardsCheck[1].value){
            $(".cards_tit").html("对子正确");
        } else if(cardsCheck[0].value == "X" && cardsCheck[1].value == "Y"){
            $(".cards_tit").html("大小王正确");
        } else{
            $(".cards_tit").html("错误");
        }
    } else if(cardsCheck.length == 3){
        for(var l=0;l<cardsCheck.length-1;l++){
            if(cardsCheck[l].value != cardsCheck[l+1].value){
                $(".cards_tit").html("错误");
                return;
            }
            $(".cards_tit").html("三张对正确");
        }
    } else if(cardsCheck.length == 4){
        for(var i =0;i<cardsCheck.length -1 ; i++){
            if(cardsCheck[i].value == cardsCheck[i+1].value){
                count4++;
            }
        }
        if(count4 == 2){
            $(".cards_tit").html("三带一正确");
        } else if(count4 == 3){
            $(".cards_tit").html("炸正确");
        } else{
            $(".cards_tit").html("错误");
        }
    } else if(cardsCheck.length >4){
        cardsShun(cardsCheck);
        cardsContinueTow(cardsCheck);
        if(cardsCheck.length == 6){
            for(var i =0;i<cardsCheck.length -1 ; i++){
                if(cardsCheck[i].value == cardsCheck[i+1].value){
                    count6++;
                } else{
                    count6=0;
                }
            }
            if(count6 == 3){
                $(".cards_tit").html("四带二(炸)正确");
            }
        }

    }

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
