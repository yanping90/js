$(function(){
    var userSort = function(a,b){
        if(a.value == b.value){
            return a.color - b.color;
        } else{
            return b.value - a.value;
        }
    }
    var randomNum = function(){
        return Math.random() > 0.5 ? 1:-1;
    }
    var addCard = function(color,value,name){
        return {
            color:color,
            value:value,
            name:name
        };
    }
    var l= function(a){
        console.log(JSON.stringify(a,null,2));
    }
    var mappings ={
        "J":11,
        "Q":12,
        "K":13,
        "A":14,
        "2":17
    };
    for(var i=3;i<=10;i++){
        mappings[i] = i;
    }
    var cards=[];
    for(var m in mappings){
        if(mappings.hasOwnProperty(m)){
            for(var i=1; i<=4;i++){
                cards.push(addCard(i,mappings[m],m));
            }
        }
    }
    cards.push(addCard(1,102,"大王"));
    cards.push(addCard(1,101,"小王"));
    cards.sort(randomNum);
    var cardsNew =[];
    for(var i =0;i<3;i++){
        var sortCards =cards.splice(0,17);
        cardsNew.push(sortCards);
    }
    cardsNew[0].sort(userSort);
    //造牌，验证牌的规则 [[1,"A"],[102,"大王"]]
    var createCards = function(arr){
        var arrNew=[];
        for(var i =0;i<arr.length;i++){
            arrNew.push({
                value:arr[i][0],
                name:arr[i][1]
            });
        }
        return arrNew;
    }
    //object可以计算数组里重复的个数
    var repeatCards = function(arr){
        var obj={};
        for(var i=0;i<arr.length;i++){
            obj[arr[i].value] == undefined ? obj[arr[i].value] =1:obj[arr[i].value]++;
        }
        return obj;
    }
    //计算每张牌
    var  eachCards = function(cards){
        var arr=[];
        for(var i in cards){
            arr.push(i);
        }
        return arr;
    }
    //计算count;
    var cardsCount = function(cards){
        var arr=[];
        for(var r in cards){
            arr.push(cards[r]);
        }
        return arr;
    }
    //计算每张牌的数组
    var eachCard = function(cards){
        return eachCards(repeatCards(cards));
    }
    //计算每张牌出现次数的数组
    var cardCount = function(cards){
        return cardsCount(repeatCards(cards));
    }
    var cardsCheck = createCards([[3,3],[3,3],[3,3],[4,4],[4,4],[4,4],[5,5],[5,5],[5,5],[5,5],[10,10],[6,6]]).sort(userSort);
    cardsCheck.sort(userSort);
    var objRepeat=repeatCards(cardsCheck);
    console.log(l(cardsCheck));
    console.log(l(objRepeat));
    console.log(eachCard(cardsCheck));
    console.log(cardCount(cardsCheck));

    //对子
    var duiRule = function(cards){
        if(cards.length != 2 || cardCount(cards).length !=1){
            return false;
        } else {
            return true;
        }
    }
    //炸（两张）
    var zhaRule = function(cards){
        if(cards[0].value!=102 || cards[1].value!=101 ){
            return false;
        } else {
            return true;
        }
    }
    //三张相同
    var threeRule = function(cards){
        if(cards.length != 3 || eachCard(cards).length != 1){
            return false;
        } else {
            return true;
        }
    }
    //四张相同
    var fourRule = function(cards){
        if(cardsCheck.length != 4 || eachCard(cards).length != 1){
            return false;
        } else {
            return true;
        }
    }
    //三带一、三带二
    var threeORule = function(cards){
        var count=0;
        var cardsCount=cardCount(cards);
        if(cardsCheck.length >= 3 && cardsCheck.length <= 5){
            if(eachCard(cards).length == 1){
                return true;
            } else if(eachCard(cards).length==2){
                for(var c =0;c<cardsCount.length;c++){
                    if(cardsCount[c] == 3){
                        return true;
                    }
                }
            } else {
                return false;
            }
        }
    }
    //四带二
    var fourTRule = function(cards){
        var eachCards=eachCard(cards);
        var cardsCount = cardCount(cards);
        if(cards.length == 6){
            if(eachCards.length >=2 && eachCards.length <=3 ){
                for(var c=0;c<cardsCount.length;c++){
                    if(cardsCount[c] == 4){
                        return true;
                    }
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    //顺子
    var shunRule = function(cards){
        var eachCards = eachCard(cards);
        var countCards = cardCount(cards);
        if(cards.length >=5){
            for(var j=0;j<countCards.length;j++){
                if(countCards[j] != 1){
                    return false;
                }
            }
            for(var i=0;i<eachCards.length-1;i++){
                if(eachCards[i] != eachCards[i+1] - 1){
                    return false;
                }
            }
            return true;
        }
    }
    //连对(两张)
    var lianDuiRule = function(cards){
        var eachCards = eachCard(cards);
        var countCards = cardCount(cards);
        if(cards.length >=6){
            for(var j=0;j<countCards.length;j++){
                if(countCards[j] != 2){
                    return false;
                }
            }
            if(eachCards.length >=3){
                for(var i=0;i<eachCards.length-1;i++){
                    if(eachCards[i] != eachCards[i+1] - 1){
                        return false;
                    }
                }
                return true;
            }
        }
    }
    //连对(三张) 三带一、三代二(二必须是对子)
    var lianThreeRule = function(cards){
        var eachCards = eachCard(cards);
        var countCards = cardCount(cards);
        var count=0;
        var arr=[];
        if(cards.length >=6){
            for(var c in objRepeat){
                if(objRepeat[c]==3){
                    count++;
                    arr.push(c);
                }
            }
            arr.sort(userSort);
            if(count < 2){
                return false;
            } else if(cards.length == count *3 +count){
                for(var i=0;i<arr.length-1;i++){
                    if(arr[i] != arr[i+1] - 1){
                        return false;
                    }
                }
                return true;
            } else if(cards.length == count *3 +count * 2){
                for(var c in countCards){
                    if(countCards[c]==2){
                        count++;
                    }
                }
                if(){}
            }
        }
    }
    //连对(四张张) 四带二
    var lianFourRule = function(){

    }

    if(duiRule(cardsCheck)){
        console.log("dui过");
    } else if(zhaRule(cardsCheck)){
        console.log("zha过");
    } else if(threeRule(cardsCheck)){
        console.log("th过");
    } else if(fourRule(cardsCheck)){
        console.log("f过");
    } else if(threeORule(cardsCheck)){
        console.log("31过");
    } else if(fourTRule(cardsCheck)){
        console.log("ft过");
    } else if(shunRule(cardsCheck)){
        console.log("shun过");
    } else if(lianDuiRule(cardsCheck)){
        console.log("lian过");
    } else if(lianThreeRule(cardsCheck)){
        console.log("lt过");
    } else{
        console.log("不过");
    }
})
