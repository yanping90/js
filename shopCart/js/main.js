$(function(){

    new Vue({
        el:"#shopCart",
        data:{
            goods:[],
            isActive:false,
            isGray:false
        },
        mounted:function(){
            var _self = this;
            _self.$nextTick(function(){
                _self.getGoods();
            })
        },
        filters:{
            fatMoney:function(v){
                return "￥"+v.toFixed(2);
            }
        },
        methods:{
            getGoods:function(){
                var _self =this;
                $.get("js/goods.json",function(r){
                    _self.goods= r.result.list;
                    //JSON.stringify()把JSON转化为字符串
                    console.log(JSON.stringify(_self.goods));
                });
            },
            changeMoney:function(good,value){
                var _self = this;
                _self.isGray = false;
                if(value==1){
                    good.goodNum ++;
                } else {
                    if(good.goodNum>1){
                        good.goodNum-- ;
                    } else if(good.goodNum == 1) {
                        _self.isGray=true;
                    }
                }
            }
        }
    });

})
