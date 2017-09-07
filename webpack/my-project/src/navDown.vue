<template>
    <div  @mouseenter="isShow= !isShow"  @mouseleave="isShow= !isShow">
        <a href="javasrcipt:;">{{tit}}</a>
        <ul v-show="isShow" class="downCont">
            <li v-for="nav in navs"><a :href="nav.href" target="_blank">{{nav.text}}</a></li>
        </ul>
    </div>

</template>
<script>
    export default {
        name:"nav",
        props:["tit","navs"],
        data:function(){
            return{
                isShow:false,
                downCont:true
            }
        }
    }
</script>
<style>
    .downCont{
        position: absolute;
    }
</style>