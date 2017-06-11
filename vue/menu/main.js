window.onload=function(){

    new Vue({
        created:function(){
            console.log("a is")
        }
    });


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
            m1: function(e) {
                bus.$emit("m1c", this, e);

            }
        }
    });

    bus.$on("m1c", function (v, e) {
        document.title = e.target.innerHTML;
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

        }


    });

    ins.$mount("#menu");

}
