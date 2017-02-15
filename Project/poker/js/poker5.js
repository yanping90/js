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
    //顺子
    var shunCard = function (arr) {
        arr.sort(userSort);
        for(var i=0;i<arr.length-1;i++){
            if(arr[i] !=arr[i+1]+1 ){
                return false;
            }
        }
        return true;
    }
    //指定牌重复次数为几的
    var selectCount = function (obj,selectValue) {
        var arr=[];
        for(var i in obj){
            if(obj[i] ==selectValue){
                arr.push(obj[i]);
            }
        }
        return arr;
    }
    //指定重复次数为几的牌
    var selectCards = function (obj,selectValue) {
        var arr=[];
        for(var i in obj){
            if(obj[i] ==selectValue){
                arr.push(parseInt(i));
            }
        }
        return arr.sort(userSort);
    }

    //造牌
    //var arrNum = [5,5,5,5,4,4,4,6,6,6,6,2,2,2];
    var arrNum = [5,5,6];
    arrNum.sort(userSort);

    var countCards = countCard(arrNum);
    var eachCounts = eachCount(countCards);
    console.log(arrNum);
    console.log(countCards);

    //规则
    var maxCount = max(eachCounts);
    if(arrNum.length ==1){
        return console.log("true");
    }

    switch(maxCount){
        case 1:
            //大小王
            if(arrNum[0]=="4001" && arrNum[1]=="3001"){
                return console.log("true");
            }
            //顺子
            if(arrNum.length>=5){
                shunCard(arrNum);
            }
            break;
        case 2:
            //对子
            if(arrNum.length==2){
                return console.log("true");
            } else if(arrNum.length>=6){
                //连对
                var time2 = selectCount(countCards,2);
                var time1 = selectCount(countCards,1);
                var time2Cards = selectCards(countCards,2);
                if(arrNum.length >=6){
                    shunCard(time2Cards);
                    if(time1.length !=0){
                        return console.log("false");
                    }
                    if(time2.length == time2Cards.length){
                        return console.log("true");
                    } else {
                        return console.log("false");
                    }
                }
            } else {
                return console.log("false");
            }
            break;
        case 3:
            var time2 = selectCount(countCards,2);
            var time3Cards = selectCards(countCards,3);
            //三带一、三带二
            if(arrNum.length ==3 || arrNum.length == 4){
                return console.log("true");
            } else if(arrNum.length == 5){
                if(time2.length !=1){
                    return  console.log("false");
                } else {
                    return console.log("true");
                }
            } else {
                return  console.log("false");
            }
            //飞机
            if(arrNum.length >=6){
                shunCard(time3Cards);
                var time3CardsLen = time3Cards.length;
                if(arrNum.length == time3CardsLen *3 + time3CardsLen || arrNum.length == time3CardsLen *3){
                    return console.log("true");
                } else if(arrNum.length == time3CardsLen *3 + time3CardsLen * 2){
                    var time1 = selectCount(countCards,1);
                    if(time1.length){
                        return console.log("false");
                    } else if(time2.length && time2.length == time3CardsLen){
                        return console.log("true");
                    }
                } else {
                    return console.log("false");
                }
            } else {
                return console.log("false");
            }
            break;
        case 4:
            //炸、四带二、四带三
            if(arrNum.length ==4 || arrNum.length ==6){
                return console.log("true");
            } else if(arrNum.length == 7){
                var time3 = selectCount(countCards,3);
                if(time3.length ==1){
                    return  console.log("true");
                } else {
                    return  console.log("false");
                }
            }
            //连炸
            var time4Cards = selectCards(countCards,4);
            var time4CardsLen = time4Cards.length;
            shunCard(time4Cards);
            if(arrNum.length == time4CardsLen * 4 || arrNum.length == time4CardsLen * 4 + time4CardsLen *2){
                return console.log("true");
            } else if(arrNum.length == time4CardsLen * 4 + time4CardsLen *3){
                var time3Cards = selectCards(countCards,3);
                if(time3Cards.length == time4CardsLen){
                    return console.log("true");
                } else {
                    return console.log("false");
                }
            } else {
                return console.log("true");
            }
            break;
    }
})