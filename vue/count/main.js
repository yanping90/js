window.onload= function(){

    vm1 = new Vue({
        el:"#time",
        computed:{
            showDay:function(){
                var resultD= new Date("2017-4-25").getTime();
                var nowD = new Date().getTime();
                return this.day = ((resultD-nowD)/(60*60*24*1000)) >> 0;
            }
        }
    });

}
