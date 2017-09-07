<template>
    <div class="comWidth">
        <div class="banner">
            <ul class="clearfix cont">
                <transition-group name="banner" tag="li">
                    <li v-for="(b,index) in bs" v-show="index == num" :key="b" @mouseenter="playEnter" @mouseleave="play"><img :src="b" alt="1"/></li>
                </transition-group>
            </ul>
            <ul class="dot clearfix">
                <li v-for="(d,index) in bs.length" @click="change(index)"  :class="{active:index == num}"></li>
            </ul>
        </div>
    </div>

</template>
<script>
    export default {
        name:"banner",
        data:function(){
            return{
                bs:[
                    "src/assets/banner01.jpg",
                    "src/assets/banner02.jpg",
                    "src/assets/banner03.jpg"
                ],
                num:0,
                isActive:false,
                timer:0
            }
        },
        created:function(){
                this.play();
            },
        methods:{
            change:function(index){
                this.num = index;
            },
            play:function(){
                var _self = this;
                var autoPlay=function(){
                    _self.num++;
                    if(_self.num == _self.bs.length){
                        _self.num=0;
                        return;
                    }
                }
                this.timer=setInterval(autoPlay,3000);
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
        padding-top: 30px;
        width:1200px;
        height: 290px;
        position: relative;
        overflow: hidden;
    }
    .banner ul.cont{
        width:3000000px;
    }
    .banner ul.cont li{
        float: left;
    }
    .dot{
        position: absolute;
        left:50%;
        bottom:20px;
        margin-left: -60px;
    }
    .dot li{
        width:10px;
        height: 10px;
        border-radius:50%;
        background-color: #fff;
        float: left;
        margin-right: 10px;
    }
    .dot li.active{
        background-color: #f90;
    }
    .banner-enter-active, .banner-leave-active {
        transition: all 1s;
    }
    .banner-enter, .banner-leave-to {
        opacity: .5;
        /*transform: translateY(30px);*/
    }
</style>