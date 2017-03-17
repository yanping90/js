window.onload = function(){
    var app= new Vue({
        el:"#app",
        data:{
            message:"hello message"
        }
    });

    var app1 = new Vue({
        el:"#app1",
        data:{
            message:"titless"
        }
    });

    var app2 = new Vue({
        el:"#app2",
        data:{
            as:[
                {text:"hello"},
                {text:"world"},
                {text:"hloowrd"}
            ]
        }
    });
    app2.as.push({text:"hello world"});

    var app3= new Vue({
        el:"#app3",
        data:{
            message:"hello world"
        },
        methods:{
            reverseMessage:function(){
                this.message = this.message.split("").reverse().join("");
            }
        }
    });

    var app4 =new Vue({
        el:"#app4",
        data:{
            message:"hello world"
        }
    });

    Vue.component("item01",{
        template:"<li>hello world</li>"
    })
    var app7=new Vue({
        el:"#app7"
    });

    Vue.component("item02",{
        props:["item"],
        template:"<li>{{item.text}}</li>"
    });
    var app8=new Vue({
        el:"#app8",
        data:{
            items:[
                {text:"华东理工大学2016年招生政策..."},
                {text:"盘点文商科学生可以申请的STE..."},
                {text:"忙于留学申请？也许这些申请重要..."}
            ]
        }
    });

    var app9=new Vue({
        el:"#app9",
        data:{
            message:"hello world"
        },
        methods:{
            reverseMessage:function(){
                this.message= this.message.split("").reverse().join("");
            }
        }
    });



};
