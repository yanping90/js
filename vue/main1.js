window.onload=function(){

    var d3= new Vue({
        el:"#demo3",
        data:{
            message:"hello world"
        }
    });


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