<template>
    <div class="menu">
        <ul>
            <li class="menuActive"><a href="#">首页</a></li>
            <li><a href="#">课程</a></li>
            <li><a href="#">学校</a></li>
            <li><a href="#">新闻</a></li>
            <li><a href="#">导学备考</a></li>
            <li><a href="#">预约报名</a></li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:"topTit"
    }
</script>
<style>
    .menu{
        padding-bottom: 8px;
        position: absolute;
        left: 10px;
        top: 0;
    }
    .menu ul li{
        float: left;
        font-size:18px;
        padding: 6px 24px;
        margin: 0 10px;
    }
    .menu ul li.menuActive{
        border-radius:50px;
        background-color: #445aa8;
    }
    .menu ul li.menuActive a{
        color:#fff;
    }
</style>