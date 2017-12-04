<template>
    <div class="banner">
        <ul class="clearfix ">
            <li v-for="b in bs" @mouseenter="changeImg"><img :src="b.text" alt=""/></li>
        </ul>
        <ul class="dot">
            <li v-for="d in bs.length"><a href="javascript:;"></a></li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:"banner",
        data:function(){
            return{
                bs:[
                    {text:"./dist/banner01.jpg"},
                    {text:"./dist/banner02.jpg"},
                    {text:"./dist/banner03.jpg"}
                ],
                num:0
            }
        },
        methods:{
            changeImg:function(){
                console.log("click");
            }
        }
    }
</script>
<style>
    .banner{
        overflow: hidden;
        height: 458px;
        position: relative;
        z-index: -10000;
    }
    .banner ul li img{
        width:100%;
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
</style>