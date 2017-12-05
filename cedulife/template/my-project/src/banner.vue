<template>
    <div class="banner">
        <ul>
            <li v-for="(b,index) in bs" @mouseenter="playEnter" @mouseleave="play"><img :src="b.text" alt="" v-show="num == index"/></li>
        </ul>
        <ul class="dot clearfix">
            <li v-for="(d,index) in bs.length" @click="changeDot(index)"><a href="javascript:;" :class="{activeDot:num == index}"></a></li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:"banner",
        data:function(){
            return{
                bs:[
                    {text:"dist/banner01.jpg"},
                    {text:"dist/banner02.jpg"},
                    {text:"dist/banner03.jpg"}
                ],
                num:0,
                timer:0
            }
        },
        created:function(){
            this.play();
        },
        methods:{
            changeDot:function(index){
                this.num=index;
            },
            play:function(){
                var _self = this;
                var autoPlay =function(){
                    _self.num++;
                    if(_self.num == _self.bs.length){
                        _self.num =0;
                        return;
                    }
                }
                this.timer = setInterval(autoPlay,3000);
            },
            playEnter:function(){
                clearInterval(this.timer);
                console.log("mouseenter");
            }
        }
    }
</script>
<style>
    .banner{
        overflow: hidden;
        height: 458px;
        position: relative;
    }
    .banner ul li img{
        height: 458px;
    }
    .dot{
        position: absolute;
        top:428px;
        left:50%;
    }
    .dot li{
        float: left;
        margin-right: 10px;
    }
    .dot li a{
        width:12px;
        height: 12px;
        border-radius:50%;
        display: inline-block;
        background-color: #fff;
    }
    .dot li a.activeDot{
        background-color: #f80;
    }
</style>