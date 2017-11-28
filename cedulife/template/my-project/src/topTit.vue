<template>
    <div class="top-header">
        <div class="width clearfix">
            <div class="fl"><i class="ico-greet ico"></i>欢迎来到继续教育平台！</div>
            <div class="fr">
                <a href="course.html">开班课程</a>|
                <a href="book.html">在线报名</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"topTit"
    }
</script>
<style>
    .top-header{
        background-color: #f2f2f2;
        height: 44px;
        line-height: 44px;
    }
    .top-header .fl{
        color:#666666;
    }
    .top-header .fr{
        color:#a7a7a7;
    }
    .top-header .fr a{
        color:#333;
        padding: 0 20px;
    }
    .top-header .fr a:last-child{
        padding-right: 0;
    }
    .top-header .fr a:hover{
        color:#ee7800;
    }
    .ico-greet {
        width: 16px;
        height: 16px;
        position: relative;
        top: 3px;
        margin-right: 10px;
        background-position: 0 0;
    }
</style>