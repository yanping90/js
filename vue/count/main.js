window.onload= function(){

    vm1 = new Vue({
        el:"#time",
        data:{
            result:"xx"
        },
        computed:{
            showDay:function(){
                var _self=this;
                var roll=function(){
                    var resultD= new Date("2017-4-27").getTime();
                    var nowD = new Date().getTime();
                    var leftD = (resultD-nowD)/1000;
                    var day = (leftD/(60*60*24)) >> 0;
                    var hour = (leftD/(60*60) % 24) >> 0;
                    var minutes = (leftD/60 % 60) >> 0;
                    var second = (leftD % 60) >> 0;
                    _self.result ="还剩" + day + "天" + hour + "小时" + minutes + "分" + second + "秒";
                }
                setInterval(roll,500);
            }
        }
    });


}
