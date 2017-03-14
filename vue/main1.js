window.onload=function(){
    var app1 = new Vue({
        el:"#app1",
        data:{
            message:"hello world",
            time:new Date().getFullYear()+"年"+parseInt(new Date().getMonth()+1)+"月"
        }
    });

    var app2 = new Vue({
        el:"#app2",
        data:{
            message:"hello world"
        }
    });
}