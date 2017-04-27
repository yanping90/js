window.onload=function(){

    d5= new Vue({
        el:"#dem05",
        data:{
            message:"hello world",
            show:"true"
        }
    });

    d4=new Vue({
        el:"#dem04",
        data:{
            msg:"123"
        }
    });

    d3= new Vue({
        el:"#demo3",
        data:{
            message:"hello world",
            o1:""
        }
    });
    d3.o1={};
    Vue.set(d3.o1,"b","how old are you?");

    var d1=new Vue({
        el:"#demo2",
        data:{
            a:1
        },
        methods:{
            plus:function(){
                this.a++;
            }
        }
    });

    //d1.alt={};
    ////Vue.set(d1.alt,"b","1");
    //d1.alt=Object.assign({},d1.alt,{a:10,b:2});

    new Vue({
        el:"#demo01",
       data:{
           doSomeThing:"hello"
       }
    });

}