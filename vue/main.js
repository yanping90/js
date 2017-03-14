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

    Vue.component('todo-item', {
        template: '<li>This is a todo</li>'
    })
    var app5=new Vue({
        el:"#app5"
    });

    Vue.component("todo-item",{
        props:["tod", "xxx"],
        template:"<li>{{tod.text}} {{xxx}}</li>"
    });
    var app6=new Vue({
        el:"#app6",
        data:{
            grouplist:[
                {text:"hello"},
                {text:"world"},
                {text:"hello world"}
            ],
            tail: "..."
        }
    });



};
