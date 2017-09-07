
<template>
    <header>
        <div class="header-top">
            <div class="comWidth  clearfix">
                <div class="fl">
                    <ul class="header-cont">
                        <li class="brand-tit"><NavDown tit="建站品牌" :navs="navs"></NavDown></li>
                        <li v-for="navH in navHs"><a :href="navH.href" target="_blank">{{navH.text}}</a></li>
                    </ul>
                </div>
                <div class="fr">
                    <ul>
                        <li v-for="user in users"><a href="user.href" target="_blank">{{user.text}}</a></li>
                    </ul>
                </div>
            </div>
        </div>


        <nav>
            <div class="comWidth clearfix">
                <a class="logo fl"><img src="./assets/logo.png" alt=""/></a>
                <div class="menu fl">
                    <ul class="clearfix">
                        <li v-for="menu in menus"><a :href="menu.href">{{menu.text}}</a></li>
                        <li class="menu-tit"><NavDown tit="更多" :navs="menuNav"></NavDown></li>
                    </ul>
                </div>
                <div class="search clearfix">
                    <select name="" id="" class="fl">
                        <option value="">作品</option>
                        <option value="">人才</option>
                    </select>
                    <input type="text" placeholder="关键字" v-model="text" @keyup="searchTxt" class="fl"/>
                    <ul class="search-cont" v-show="listShow">
                        <li v-for="(list,index) in lists" @click="select(index)">{{list}}</li>
                    </ul>
                    <button class="fl"></button>
                </div>
            </div>
        </nav>

    </header>

</template>

<script>

import NavDown from './navDown.vue'

export default {
  name:"top",
  data:function(){
        return{
            navHs:[
                {text:"担保接单",href:"db.html"},
                {text:"急需求职",href:"zx.html"},
                {text:"高端人才",href:"gd.html"},
                {text:"|",href:"javascript:;"},
                {text:"PSD分享",href:"psd.html"},
                {text:"原创教程",href:"ych.html"},
                {text:"|",href:"javascript:;"},
                {text:"热门培训",href:"rm.html"},
                {text:"今日酷站",href:"jr.html"}
            ],
            users:[
                {text:"注册",href:"zc.html"},
                {text:"|",href:"javascript:;"},
                {text:"登录",href:"dl.html"},
                {text:"发布作品",href:"fb.html"}
            ],
            navs:[
                {"text":"北京",href:"/u/company?r=01"},
                {"text":"上海",href:"/u/company?r=03"},
                {"text":"广州",href:"/u/company?r=0r01"},
                {"text":"深圳",href:"/u/company?r=01"},
                {"text":"杭州",href:"/u/company?r=03"},
                {"text":"武汉",href:"/u/company?r=0r01"},
                {"text":"天津",href:"/u/company?r=01"},
                {"text":"重庆",href:"/u/company?r=03"},
                {"text":"苏州",href:"/u/company?r=0r01"},
                {"text":"宁波",href:"/u/company?r=0r01"},
                {"text":"合肥",href:"/u/company?r=0r01"},
                {"text":"哈尔滨",href:"/u/company?r=0r01"},
                {"text":"佛山",href:"/u/company?r=0r01"},
                {"text":"济南",href:"/u/company?r=0r01"},
                {"text":"东莞",href:"/u/company?r=0r01"},
                {"text":"昆明",href:"/u/company?r=0r01"},
                {"text":"贵阳",href:"/u/company?r=0r01"},
                {"text":"金华",href:"/u/company?r=0r01"},
                {"text":"邵阳",href:"/u/company?r=0r01"},
                {"text":"岳阳",href:"/u/company?r=0r01"},
                {"text":"濮阳",href:"/u/company?r=0r01"},
                {"text":"钦州",href:"/u/company?r=0r01"}
            ],
            menus:[
                {"text":"作品",href:"zp.html"},
                {"text":"招聘",href:"zhp.html"},
                {"text":"素材",href:"sc.html"},
                {"text":"服务",href:"fw.html"}
            ],
            menuNav:[
                {"text":"人才",href:"rc.html"},
                {"text":"专访",href:"zhf.html"},
                {"text":"品牌",href:"pp.html"},
                {"text":"十佳",href:"shj.html"}
            ],
            isActive:"true",
            data:["春风","春风十","盲约","春风十里","春风十里不如你","春风十里不如你剧情介绍","盲约","盲约剧情介绍","盲约盲约","盲约剧情","盲约剧"],
            lists:[],
            text:"",
            listShow:false
        }
    },
    components: {
        NavDown
    },
    methods:{
        searchTxt:function(){
            var _self = this;
            _self.lists=[];
            if(_self.text != ""){
                _self.lists = _self.data.filter(function(v){
                    return v.indexOf(_self.text) !=-1 ;
                });
            }
            _self.listShow=true;
        },
        select:function(index){
            this.text = this.lists[index];
            this.listShow=false;
        }
    }

}
</script>

<style>
    .header-top {
        height: 30px;
        line-height: 30px;
        background-color: #4e4e4e;
    }
    header a{
        color:#959595;
    }
    header li{
        float: left;
        padding: 0 10px;
    }
    .brand-tit{
        position: relative;
        padding: 0;
    }
    .brand-tit img{
        position: absolute;
        right:0;
        top:14px;
    }
    .brand-tit div{
        padding: 0 10px;
    }
    .brand-tit .downCont{
        left:70px;;
        top:0;
        width:1000px;
        font-size:14px;
        background-color: #4e4e4e;
        padding: 10px;
    }
    .brand-tit .downCont a{
        color:#cccccc;
    }
    .brand-tit .downCont a:hover{
        text-decoration: underline;
        color:#eee;
    }
    .header-cont li:last-child a{
        color:#f90;
    }
    nav{
        height: 60px;
        border-bottom: 1px solid #e0e0e0;
    }
    .logo{
        margin-top: 20px;;
    }
    .menu{
        margin-left: 230px;
    }
    .menu ul li a{
        font-size:16px;
        padding: 15px 10px;
        display: inline-block;
        color:#333;
    }
    .menu ul li a:hover{
        border-bottom:2px solid #008040;
        color:#333;
    }
    .menu ul li.menu-tit:hover,
    .menu-tit .downCont{
        background-color: #454545;
    }
    .menu ul li.menu-tit:hover a{
        border:none;
        color:#959595;
    }
    header .menu ul  li.menu-tit .downCont li{
        float: none;
        padding: 0 !important;
    }
    .menu ul  li.menu-tit{
        position: relative;
    }
    .menu ul  li.menu-tit .downCont{
        left:0;
    }
    .menu ul  li.menu-tit .downCont li a{
        font-size:14px;
        color:#959595;
        padding: 0 22px;
        display: inline-block;
    }
    .menu ul  li.menu-tit .downCont li:hover a{
        background-color: #00803f;
        color:#fff;
    }
    .search{
        width:212px;
        height: 30px;
        border:1px solid #ddd;
        border-radius:50px;
        float: right;
        margin-top: 15px;
        position: relative;
    }
    .search select{
        font-size:12px;
        color:#999;
        -webkit-appearance: none;
        background: url("./assets/menu-down.png") right center no-repeat;
        padding: 0 15px;
        line-height: 30px;
    }
    .search input{
        width:115px;
        line-height: 30px;
        padding-left: 10px;
    }
    .search button{
        width:16px;
        height: 16px;
        background: url("./assets/ser-icon.jpg") center center no-repeat;
        margin-top: 6px;
    }
    .search-cont{
        position: absolute;
        top:32px;
        left:56px;
        width:130px;
        overflow: hidden;
        padding: 0 10px;
        background-color: #fff;
        z-index: 1000;
        box-shadow: 0 0 6px #999;
    }
    .search-cont li{
        width:110px;
        padding:0 !important;
    }

</style>
