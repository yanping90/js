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
    //计算count;
    var cardsCount = function(cards){
        var arr=[];
        for(var r in cards){
            arr.push(cards[r]);
        }
        return arr;
    }
    var cardsCheck = createCards([[5,4],[5,4],[6,4],[6,4]],[7,4],[7,4]).sort(userSort);
    var objRepeat=repeatCards(cardsCheck);
    console.log(l(cardsCheck));

    //计算每张牌重复次数的数组
    var countCards = function(cards){
        return cardsCount(repeatCards(cards));
    }
    //判断数组中每个元素是否相等
    var isEq =function(arr){
        var count=0;
        for(var i =0;i<arr.length -1;i++){
            if(arr[i] == arr[i+1]){
                count++;
            }
        }
        if(count == arr.length-1){
            return true;
        } else {
            return false;
        }
    }

    //取选择牌中出现次数最多的
    var maxCount = function(cards){
        return Math.max.apply(null,countCards(cards));
    }
    //对子
    var duiRule=function(cards){
        var countArr = countCards(cards);
        if(cards.length >= 2 && cards.length <= 4 && countArr.length == 1){
            return true;
        } else {
            return false;
        }
    }
    //三带一、三带二
    var threeRule = function(cards){
        var countArr = countCards(cards);
        if(cards.length == 4 && countArr.length == 2 && maxCount(cards) == 3){
            return true;
        } else if(cards.length == 5 && countArr.length == 2 && maxCount(cards) == 3){
            return true;
        } else {
            return false;
        }
    }
    //四带二
    var fourRule = function(cards) {
        var countArr = countCards(cards);
        if (cards.length == 6 && maxCount(cards) == 4) {
            if (countArr.length == 2 || countArr.length == 3) {
                return true;
            } else {
                return false;
            }
        }
    }
    //炸（大小王）
    var xyRule = function(cards){
        if(cards[0].value == 102 && cards[1].value == 101 ) {
            return true;
        } else {
            return false;
        }
    }
    //顺子
    //var shunRule = function(cards){
    //    var count=0;
    //    if(cards.length >=5 && maxCount(cards) == 1){
    //        for(var i=0;i<cards.length -1 ;i++){
    //            if(cards[i].value == cards[i+1].value+1){
    //                count++;
    //            }
    //        }
    //        if(count >= 4){
    //            return true;
    //        } else {
    //            return false;
    //        }
    //    }
    //}
    //顺子、连对
    var lianRule = function(cards,countLength,countValue){
        var countArr = countCards(cards);
        var arr=[];
        if(countArr.length >=countLength && isEq(countArr) && countArr[0] == countValue){
            for(var o in repeatCards(cards)){
                arr.push(o);
            }
            arr.sort(userSort);
            var count=0;
            for(i=0;i<arr.length-1;i++){
                if(arr[i] == arr[i+1] -1){
                    count++;
                }
            }
            if(count == arr.length -1 ){
                return true;
            } else {
                return false;
            }
        }
    }
    //连队（三带一、三带二）
    var lianTRule = function(cards){
        var countArr = countCards(cards);
        if(cards.length >=6){
            
        }
    }

    if(duiRule(cardsCheck)){
        console.log("过");
    } else if(threeRule(cardsCheck)){
        console.log("过");
    } else if(fourRule(cardsCheck)){
        console.log("过");
    } else if(xyRule(cardsCheck)) {
        console.log("过");
    } else if(lianRule(cardsCheck,5,1)) {
        console.log("过");
    } else if(lianRule(cardsCheck,3,2)){
        console.log("过");
    } else if(lianRule(cardsCheck,2,3)) {
        console.log("过");
    } else {
        console.log("不过");
    }

})
