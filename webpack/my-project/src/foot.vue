<template>
    <div class="footer">
        <div class="comWidth">
            <div class="footer-cont">
                <a href="#">关于我们</a>|<a href="#">帮助中心</a>|<a href="#">推广&amp;招聘</a>|<a href="#">网站地图</a>|<a href="#">友情链接</a>|<a href="#">联系我们</a><br>
                Copyright © 2003-2017 68design.net, All Rights Reserved　站长统计<br>
                皖ICP备05012247号    皖公网安备34010402700146号<br>
            </div>
            <div class="footer-links">友情链接：<a href="#">网站设计</a><a href="#">电商设计</a><a href="#">致设计</a><a href="#">学UI网</a><a href="#">中国设计</a><a href="#">在线广告配音</a><a href="#">中国设计网</a><a href="#">创意设计</a><a href="#">家装设计</a><a href="#">快站</a><a href="#">DOOOOR设计网</a><a href="#">在线设计</a><a href="#">微场景制作</a></div>
        </div>
    </div>
</template>
<script>
    export default {
        name:"foot"
    }
</script>
<style>
    .footer{
        background-color: #333333;
        padding: 40px 0;
    }
    .footer-cont{
        color:#999999;
        margin-bottom: 30px;
        line-height: 30px;
        font-size:13px;
        text-align: left;
        width:100%;
    }
    .footer-cont a{
        padding: 0 10px;
        color:#999999;
    }
    .footer a:hover{
        text-decoration: underline;
    }
    .footer-cont a:first-child{
        padding-left: 0;
    }
    .footer-links{
        color:#666;
    }
    .footer-links a{
        font-size:12px;
        color:#666;
        padding: 0 10px;
    }
</style>