window.onload = function(){

    var child = {
        template:"<p>hello world</p>"
    };
    a011 =new Vue({
        el:"#app011",
        components:{
            "my-component":child
        }
    });
    return;

    a010=new Vue({
        el:"#app010",
        data:{
            sexy:[]
        }
    });

    a009=new Vue({
        el:"#app009",
        data:{
            sexs:[]
        }
    });


    a008=new Vue({
        el:"#app008",
        data:{
            message:"true"
        }
    });

    a007=new Vue({
        el:"#app007",
        data:{
            message:"edit me"
        }
    });

    Vue.component("mylist",{
        props:["ls"],
        template:"<li>{{ls.text}}</li>"
    })

    a006=new Vue({
        el:"#app006",
        data:{
            lists:[
                {text:"he"},
                {text:"ll"},
                {text:"o"}
            ]
        }
    });

    a005 = new Vue({
        el:"#app005",
        data:{
            items:[
                {
                    text:"hello"
                },
                {
                    text:"world"
                },
                {
                    text:"hello world"
                }
            ]
        }
    });

    a004=new Vue({
        el:"#app004",
        data:{
            type:"c"
        }
    });

    a003=new Vue({
        el:"#app003",
        data:{
            ok:false
        }
    });
    Vue.component("mycomponent",{
        template:"<p class='text'>把样式绑定在组件上</p>"
    });
    a002=new Vue({
        el:"#app002",
        data:{
            isShow:true
        }
    });

    a001 =new Vue({
        el:"#app001",
        data:
        {
            classObject:{
                active:true,
                show:true
            }
        }
    });
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


    var app10=new Vue({
       // el:"#app10",
        data:{
            msg:"hello world"
        }
    });
    app10.$mount("#app10");



    var app11 = new Vue({
        el:"#app11",
        data:{
            msg:"helloddd"
        }
    });

    var app12=new Vue({
        el:"#app12",
        data:{
            rawHtml:"输出html"
        }
    });

    var app13=new Vue({
        el:"#app13",
        data:{
            condition:false,
            bs:0
        },
        methods: {
            m1: function() {
                this.condition = true;
            }
        },
        computed: {
            dis: function() {
                return true;
            }
        }
    });

    var app14=new Vue({
        el:"#app14",
        data:{
            ok:true
        }
    });

    var app15= new Vue({
        el:"#app15",
        data:{
            items:[
                {text:"css",isFinished:true},
                {text:"html",isFinished:false},
                {text:"js",isFinished:true}
            ]
        }
    });

    new Vue({
        el:"#app16",
        data:{
            msg:"<strong>h</strong> world",
            msg01:"<strong>h</strong> world"
        }
    });

    a17 = new Vue({
        el:"#app17",
        data:{
            msg:1
        },
        computed:{
            resultMsg:function(){
                return this.msg * 0.8
            }
        },
        filters: {
            round2 : function (v) {
                return v.toString().replace(/(\.\d\d)\d*$/, "$1");
            }
        }
    });

    a18=new Vue({
        el:"#app18",
        data:{
            rawId:"world"
        },
        filters:{
            formatId:function(v){
                return v.toString().toUpperCase().charAt(0) + v.toString().slice(1);
            }
        }
    });

    a19=new Vue({
        el:"#app19",
        data:{
            message:"hello world"
        },
        computed:{
            reverseMessage:function(){
                return this.message.split("").reverse().join("");
            }
        }
    });


};
