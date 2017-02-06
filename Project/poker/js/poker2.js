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
        "2":15
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
        var count =0;
        var arr=[];
        for(var r in cards){
            count++;
            arr.push(cards[r]);
        }
        return arr;
    }
    //两张牌（对子、大小王）
    //var cardsCheck = createCards([[4,3],[4,3]]).sort(userSort);
    //console.log(repeatCards(cardsCheck));
    //三张牌
    var cardsCheck = createCards([[2,4],[2,4],[1,4],[1,4],[1,4]]).sort(userSort);
    var arrThree=[];
    var arrRepeat=repeatCards(cardsCheck);
    console.log(l(arrRepeat));
    if(cardsCheck.length ==2){
        if(arrRepeat[cardsCheck[0].value] == 2){
            console.log("true");
        } else if(cardsCheck[0].value == 102 && cardsCheck[1].value == 101){
            console.log("true");
        } else {
            console.log("false");
        }
    } else if(cardsCheck.length == 3 && arrRepeat[cardsCheck[0].value] == 3){
        console.log("true");
    } else if(cardsCheck.length == 4){
        var count = cardsCount(repeatCards(cardsCheck));
        if(count ==2){
            var arr = cardsCount(repeatCards(cardsCheck));
            if(Math.max.apply(null,arr) == 3){
                console.log("true");
            }
        } else if(count == 1){
            console.log("true");
        } else {
            console.log("false");
        }
    } else if(cardsCheck.length == 5){
        var count = cardsCount(repeatCards(cardsCheck));
        if(count.length ==2 && Math.max.apply(null,count) == 3){
            console.log("true");
        }
    }

})