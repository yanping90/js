window.onload= function(){

    vm1 = new Vue({
        el:"#time",
        data:{
            day:"",
            hour:"",
            minutes:"",
            second:""
        },
        computed:{
            showDay:function(){
                var _self=this;
                var roll=function(){
                    var resultD= new Date("2017-4-30").getTime();
                    var nowD = new Date().getTime();
                    var leftD = (resultD-nowD)/1000;
                    if(leftD<0){
                        console.log("日期错误");
                        return;
                    }
                    var day = (leftD/(60*60*24)) >> 0;
                    var hour = (leftD/(60*60) % 24) >> 0;
                    var minutes = (leftD/60 % 60) >> 0;
                    var second = (leftD % 60) >> 0;
                    var format = function(a){
                        if(a.toString().length==1){
                            a = "0"+a;
                        } else{
                            a=a;
                        }
                        return a;
                    }
                    _self.day=day;
                    _self.hour=hour;
                    _self.minutes=format(minutes);
                    _self.second=format(second);
                }
                setInterval(roll,500);
            }
        }
    });


}
