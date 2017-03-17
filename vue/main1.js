window.onload=function(){

    var app1=new Vue({
        el:"#app1",
        data:{
            message:"hello world"
        }
    });

    var app2=new Vue({
        el:"#app2",
        data:{
            message:"hwllo"
        }
    });

    var app3=new Vue({
        el:"#app3",
        data:{
            todos:[
                {text:"hello"},
                {text:"world"},
                {text:"hello world"}
            ]
        }
    });

    var app4=new Vue({
        el:"#app4",
        data:{
            seen:true
        }
    });

}