<template>
    <div class="cate">
        <div class="cate-tit">
            <a href="javascript:;">全部分类<i class="ico"></i></a>
        </div>
        <div class="cate-cont">
            <ul>
                <li @mouseenter="showRightNav('网络教育')" @mouseleave="hideActive">
                    <div class="cate-item-tit" :class="{active:isActive === '网络教育'}">
                        <i class="ico-net ico"></i>
                        <a href="javascript:;">网络教育</a>
                        <i class="ico-arrow ico"></i>
                    </div>
                    <div class="cate-item-cont" v-show="navTit==='网络教育'">
                        <h2><span>推荐院校</span></h2>
                        <dl class="clearfix">
                            <dd><a href="#">华东师范大学1</a></dd>
                            <dd><a href="#">东华大学</a></dd>
                            <dd><a href="#">华中师范大学</a></dd>
                            <dd><a href="#">西南交通大学</a></dd>
                        </dl>
                        <h2><span>推荐课程</span></h2>
                        <dl class="clearfix">
                            <dt><b>高起专：</b></dt>
                            <dd><a href="#">药学</a></dd>
                            <dd><a href="#">护理学</a></dd>
                            <dd><a href="#">机械电子工程</a></dd>
                            <dd><a href="#">电气工程及其自动化</a></dd>
                        </dl>
                        <dl class="clearfix">
                            <dt><b>专升本：</b></dt>
                            <dd><a href="#">网络工程</a></dd>
                            <dd><a href="#">软件工程</a></dd>
                            <dd><a href="#">计算机科学与技术</a></dd>
                            <dd><a href="#">地质工程</a></dd>
                        </dl>
                    </div>
                </li>
                <li @mouseenter="showRightNav('自学考试')" @mouseleave="hideActive">
                    <div class="cate-item-tit" :class="{active:isActive === '自学考试'}">
                        <i class="ico-self ico"></i>
                        <a href="javascript:;">自学考试</a>
                        <i class="ico-arrow ico"></i>
                    </div>
                    <div class="cate-item-cont"  v-show="navTit==='自学考试'">
                        <h2><span>推荐院校</span></h2>
                        <dl class="clearfix">
                            <dd><a href="#">华东师范大学2</a></dd>
                            <dd><a href="#">东华大学</a></dd>
                            <dd><a href="#">华中师范大学</a></dd>
                            <dd><a href="#">西南交通大学</a></dd>
                        </dl>
                        <h2><span>推荐课程</span></h2>
                        <dl class="clearfix">
                            <dt><b>高起专：</b></dt>
                            <dd><a href="#">药学</a></dd>
                            <dd><a href="#">护理学</a></dd>
                            <dd><a href="#">机械电子工程</a></dd>
                            <dd><a href="#">电气工程及其自动化</a></dd>
                        </dl>
                        <dl class="clearfix">
                            <dt><b>专升本：</b></dt>
                            <dd><a href="#">网络工程</a></dd>
                            <dd><a href="#">软件工程</a></dd>
                            <dd><a href="#">计算机科学与技术</a></dd>
                            <dd><a href="#">地质工程</a></dd>
                        </dl>
                    </div>
                </li>
                <li @mouseenter="showRightNav('成人高考')" @mouseleave="hideActive">
                    <div class="cate-item-tit" :class="{active:isActive === '成人高考'}">
                        <i class="ico-adult ico"></i>
                        <a href="javascript:;">成人高考</a>
                        <i class="ico-arrow ico"></i>
                    </div>
                    <div class="cate-item-cont"  v-show="navTit==='成人高考'">
                        <h2><span>推荐院校</span></h2>
                        <dl class="clearfix">
                            <dd><a href="#">华东师范大学3</a></dd>
                            <dd><a href="#">东华大学</a></dd>
                            <dd><a href="#">华中师范大学</a></dd>
                            <dd><a href="#">西南交通大学</a></dd>
                        </dl>
                        <h2><span>推荐课程</span></h2>
                        <dl class="clearfix">
                            <dt><b>高起专：</b></dt>
                            <dd><a href="#">药学</a></dd>
                            <dd><a href="#">护理学</a></dd>
                            <dd><a href="#">机械电子工程</a></dd>
                            <dd><a href="#">电气工程及其自动化</a></dd>
                        </dl>
                        <dl class="clearfix">
                            <dt><b>专升本：</b></dt>
                            <dd><a href="#">网络工程</a></dd>
                            <dd><a href="#">软件工程</a></dd>
                            <dd><a href="#">计算机科学与技术</a></dd>
                            <dd><a href="#">地质工程</a></dd>
                        </dl>
                    </div>
                </li>
                <li @mouseenter="showRightNav('MBA')" @mouseleave="hideActive">
                    <div class="cate-item-tit"  :class="{active:isActive === 'MBA'}">
                        <i class="ico-MBA ico"></i>
                        <a href="javascript:;">MBA</a>
                        <i class="ico-arrow ico"></i>
                    </div>
                    <div class="cate-item-cont"  v-show="navTit==='MBA'">
                        <h2><span>推荐院校</span></h2>
                        <dl class="clearfix">
                            <dd><a href="#">华东师范大学4</a></dd>
                            <dd><a href="#">东华大学</a></dd>
                            <dd><a href="#">华中师范大学</a></dd>
                            <dd><a href="#">西南交通大学</a></dd>
                        </dl>
                        <h2><span>推荐课程</span></h2>
                        <dl class="clearfix">
                            <dt><b>高起专：</b></dt>
                            <dd><a href="#">药学</a></dd>
                            <dd><a href="#">护理学</a></dd>
                            <dd><a href="#">机械电子工程</a></dd>
                            <dd><a href="#">电气工程及其自动化</a></dd>
                        </dl>
                        <dl class="clearfix">
                            <dt><b>专升本：</b></dt>
                            <dd><a href="#">网络工程</a></dd>
                            <dd><a href="#">软件工程</a></dd>
                            <dd><a href="#">计算机科学与技术</a></dd>
                            <dd><a href="#">地质工程</a></dd>
                        </dl>
                    </div>
                </li>
                <li @mouseenter="showRightNav('EMBA')" @mouseleave="hideActive">
                    <div class="cate-item-tit" :class="{active:isActive === 'EMBA'}">
                        <i class="ico-EMBA ico"></i>
                        <a href="javascript:;">EMBA</a>
                        <i class="ico-arrow ico"></i>
                    </div>
                    <div class="cate-item-cont"  v-show="navTit==='EMBA'">
                        <h2><span>推荐院校</span></h2>
                        <dl class="clearfix">
                            <dd><a href="#">华东师范大学5</a></dd>
                            <dd><a href="#">东华大学</a></dd>
                            <dd><a href="#">华中师范大学</a></dd>
                            <dd><a href="#">西南交通大学</a></dd>
                        </dl>
                        <h2><span>推荐课程</span></h2>
                        <dl class="clearfix">
                            <dt><b>高起专：</b></dt>
                            <dd><a href="#">药学</a></dd>
                            <dd><a href="#">护理学</a></dd>
                            <dd><a href="#">机械电子工程</a></dd>
                            <dd><a href="#">电气工程及其自动化</a></dd>
                        </dl>
                        <dl class="clearfix">
                            <dt><b>专升本：</b></dt>
                            <dd><a href="#">网络工程</a></dd>
                            <dd><a href="#">软件工程</a></dd>
                            <dd><a href="#">计算机科学与技术</a></dd>
                            <dd><a href="#">地质工程</a></dd>
                        </dl>
                    </div>
                </li>
                <li @mouseenter="showRightNav('同等学力')" @mouseleave="hideActive">
                    <div class="cate-item-tit" :class="{active:isActive === '同等学力'}">
                        <i class="ico-level ico"></i>
                        <a href="javascript:;">同等学力</a>
                        <i class="ico-arrow ico"></i>
                    </div>
                    <div class="cate-item-cont"  v-show="navTit==='同等学力'">
                        <h2><span>推荐院校</span></h2>
                        <dl class="clearfix">
                            <dd><a href="#">华东师范大学6</a></dd>
                            <dd><a href="#">东华大学</a></dd>
                            <dd><a href="#">华中师范大学</a></dd>
                            <dd><a href="#">西南交通大学</a></dd>
                        </dl>
                        <h2><span>推荐课程</span></h2>
                        <dl class="clearfix">
                            <dt><b>高起专：</b></dt>
                            <dd><a href="#">药学</a></dd>
                            <dd><a href="#">护理学</a></dd>
                            <dd><a href="#">机械电子工程</a></dd>
                            <dd><a href="#">电气工程及其自动化</a></dd>
                        </dl>
                        <dl class="clearfix">
                            <dt><b>专升本：</b></dt>
                            <dd><a href="#">网络工程</a></dd>
                            <dd><a href="#">软件工程</a></dd>
                            <dd><a href="#">计算机科学与技术</a></dd>
                            <dd><a href="#">地质工程</a></dd>
                        </dl>
                    </div>
                </li>
                <li @mouseenter="showRightNav('高级研修')" @mouseleave="hideActive">
                    <div class="cate-item-tit" :class="{active:isActive === '高级研修'}">
                        <i class="ico-high ico"></i>
                        <a href="javascript:;">高级研修</a>
                        <i class="ico-arrow ico"></i>
                    </div>
                    <div class="cate-item-cont"  v-show="navTit==='高级研修'">
                        <h2><span>推荐院校</span></h2>
                        <dl class="clearfix">
                            <dd><a href="#">华东师范大学7</a></dd>
                            <dd><a href="#">东华大学</a></dd>
                            <dd><a href="#">华中师范大学</a></dd>
                            <dd><a href="#">西南交通大学</a></dd>
                        </dl>
                        <h2><span>推荐课程</span></h2>
                        <dl class="clearfix">
                            <dt><b>高起专：</b></dt>
                            <dd><a href="#">药学</a></dd>
                            <dd><a href="#">护理学</a></dd>
                            <dd><a href="#">机械电子工程</a></dd>
                            <dd><a href="#">电气工程及其自动化</a></dd>
                        </dl>
                        <dl class="clearfix">
                            <dt><b>专升本：</b></dt>
                            <dd><a href="#">网络工程</a></dd>
                            <dd><a href="#">软件工程</a></dd>
                            <dd><a href="#">计算机科学与技术</a></dd>
                            <dd><a href="#">地质工程</a></dd>
                        </dl>
                    </div>
                </li>
                <li @mouseenter="showRightNav('工程硕士')" @mouseleave="hideActive">
                    <div class="cate-item-tit" :class="{active:isActive === '工程硕士'}">
                        <i class="ico-master ico"></i>
                        <a href="javascript:;">工程硕士</a>
                        <i class="ico-arrow ico"></i>
                    </div>
                    <div class="cate-item-cont"  v-show="navTit==='工程硕士'">
                        <h2><span>推荐院校</span></h2>
                        <dl class="clearfix">
                            <dd><a href="#">华东师范大学8</a></dd>
                            <dd><a href="#">东华大学</a></dd>
                            <dd><a href="#">华中师范大学</a></dd>
                            <dd><a href="#">西南交通大学</a></dd>
                        </dl>
                        <h2><span>推荐课程</span></h2>
                        <dl class="clearfix">
                            <dt><b>高起专：</b></dt>
                            <dd><a href="#">药学</a></dd>
                            <dd><a href="#">护理学</a></dd>
                            <dd><a href="#">机械电子工程</a></dd>
                            <dd><a href="#">电气工程及其自动化</a></dd>
                        </dl>
                        <dl class="clearfix">
                            <dt><b>专升本：</b></dt>
                            <dd><a href="#">网络工程</a></dd>
                            <dd><a href="#">软件工程</a></dd>
                            <dd><a href="#">计算机科学与技术</a></dd>
                            <dd><a href="#">地质工程</a></dd>
                        </dl>
                    </div>
                </li>
                <li @mouseenter="showRightNav('DBA')" @mouseleave="hideActive">
                    <div class="cate-item-tit" :class="{active:isActive === 'DBA'}">
                        <i class="ico-DBA ico"></i>
                        <a href="javascript:;">DBA</a>
                        <i class="ico-arrow ico"></i>
                    </div>
                    <div class="cate-item-cont"  v-show="navTit==='DBA'">
                        <h2><span>推荐院校</span></h2>
                        <dl class="clearfix">
                            <dd><a href="#">华东师范大学9</a></dd>
                            <dd><a href="#">东华大学</a></dd>
                            <dd><a href="#">华中师范大学</a></dd>
                            <dd><a href="#">西南交通大学</a></dd>
                        </dl>
                        <h2><span>推荐课程</span></h2>
                        <dl class="clearfix">
                            <dt><b>高起专：</b></dt>
                            <dd><a href="#">药学</a></dd>
                            <dd><a href="#">护理学</a></dd>
                            <dd><a href="#">机械电子工程</a></dd>
                            <dd><a href="#">电气工程及其自动化</a></dd>
                        </dl>
                        <dl class="clearfix">
                            <dt><b>专升本：</b></dt>
                            <dd><a href="#">网络工程</a></dd>
                            <dd><a href="#">软件工程</a></dd>
                            <dd><a href="#">计算机科学与技术</a></dd>
                            <dd><a href="#">地质工程</a></dd>
                        </dl>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script src="../../../../jquery-3.1.1.min.js"></script>
<script>
    export default{
        name:"cate",
        data:function(){
            return {
                navTit:"",
                isActive:""
            }
        },
        methods:{
            showRightNav:function(val){
                this.navTit = val;
                this.isActive=val;
            },
            hideActive:function(){
                if(this.navTit && this.navTit != ""){
                    this.navTit=false;
                }
                if(this.isActive && this.isActive != ""){
                    this.isActive=false;
                }
            }
        }
    }
</script>
<style>
    .cate{
        box-shadow: 0 0 5px #ddd;
        width:200px;
        height: 504px;
        background-color: #fff;
    }
    .cate-tit{
        background-color:#445aa8 ;
        width:200px;
        height: 44px;
        line-height: 44px;
        text-indent: 20px;
        border-radius:4px 4px 0 0
    }
    .cate-tit a{
        font-size:16px;
        color:#fff;
    }
    .cate-item-tit a{
        font-size:16px;
        height: 50px;
        line-height: 50px;
        text-align: left;
        width:100px;
        display: inline-block;
        text-indent: 0;
    }
    .cate-cont li{
        border-top:1px dashed #dddddd;
        border-bottom:1px dashed #dddddd;
        margin-top: -1px;
        width:200px;
    }
    .cate-cont ul li:first-child .cate-item-cont{
        top:2px;
    }
    .cate-item-cont{
        position: absolute;
        left:200px;
        top:-1px;
        min-width: 400px;
        padding: 20px;
        border:1px solid #445aa8;
        background-color: #fff;
    }
    .cate-item-tit{
        text-indent: 20px;
    }
    .cate-cont li:first-child{
        border-top:none;
    }
    .cate-cont li{
        position: relative;
    }
    .cate-cont li:last-child{
        border-bottom: none;
    }
    .cate-cont ul li .ico{
        position: relative;
        top: 12px;
        left:0;
        padding-right: 10px;
        width:29px;
        height: 28px;
    }
    .cate-cont ul li .ico-arrow {
        background-position: 0 -135px;
        width: 8px;
        height: 16px;
        top: 4px;
        padding-right: 0;
    }
    .ico-net{
        background-position: 0 -169px;
    }
    .cate-cont ul li .ico-self{
        background-position: 0 -209px;
        top: 9px;
    }
    .ico-adult{
        background-position: 0 -252px;
    }
    .ico-EMBA{
        background-position: 0 -510px;
    }
    .ico-DBA{
        background-position: 0 -550px;
    }
    .cate-cont ul li .ico-MBA{
        background-position: 0 -291px;
        color:#80879c;
        line-height: 50px;
        font-style:normal;
    }
    .cate-cont ul li .ico-level{
        background-position: 0 -331px;
        top: 9px;
    }
    .cate-cont ul li .ico-high{
        background-position: 0 -376px;
        top: 7px;
    }
    .ico-master{
        background-position: 0 -424px;
    }
    .active{
        position: relative;
    }
    .active:after{
        content: "";
        position: absolute;
        top:-1px;
        left:0;
        width:200px;
        height: 50px;
        border-top:1px solid #445aa8;
        border-bottom:1px solid #445aa8;
        border-right:1px solid #fff;
        z-index: 10000;
    }
    .cate-item-cont h2{
        background: url("./assets/tit-bg.png") repeat-x center;
        height: 32px;
        line-height: 32px;
        text-indent: 20px;
    }
    .cate-item-cont h2 span{
        font-size:14px;
        background-color: #fff;
        padding: 0 10px;
    }
    .cate-item-cont dl dd,
    .cate-item-cont dl dt {
        float: left;
        padding: 10px;
    }
    .cate-item-cont dl{
        font-size:12px;
    }
    .cate-item-cont dl dt{
        float: left;
    }
    .cate-item-cont dl dd:first-child{
        padding-left: 0;
    }
</style>