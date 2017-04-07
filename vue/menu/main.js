window.onload=function(){


    vm=new Vue({
        created:function(){
            console.log(this.message);
        },
        data:{
            message:"hello"
        }
    });
    //vm.$mount("#example-1");

    new Vue({
        el:"#counter",
        data:{
            counter:0
        },
        methods:{
            counters:function(){
                this.counter = this.counter+1;
            }
        }
    });





    var bus = new Vue();

    Vue.component("menu-list",{
        props:["item"],
        template:'<li @click="m1"><a :href="item.url">{{ item.text }}</a></li>',
        methods: {
            m1: function() {
                bus.$emit("m1c", "menu-list m1 called");
            }
        }
    });

    var ins = new Vue({
        //el:"#menu",
        data:{
            items:[
                {
                    text:"首页",
                    url:"index.html"
                },
                {
                    text:"关于我们",
                    url:"about.html"
                },
                {
                    text:"联系我们",
                    url:"contact.html"
                }
            ]
        },

        created: function() {
            bus.$on("m1c", function(a){
                console.log(a);
            });
        }


    });

    ins.$mount("#menu");

}
