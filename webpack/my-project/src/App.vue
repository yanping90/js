<template>
    <div id="app">
        <top></top>
        <div class="main">
            <banner></banner>
            <!--主推作品-->
            <div class="comWidth work clearfix">
                <tit :href="href" :more="more" :tit="tits"></tit>
                <list>
                    <div slot="list-img"><img src="src/assets/works01.jpg"></div>
                    <div slot="list-tit">2017上半年结</div>
                    <div slot="list-name">李浩</div>
                    <div slot="list-note">网页设计,游戏</div>
                    <span slot="num-good">3</span>
                    <span slot="num-see">199</span>
                    <span slot="num-time">60分钟</span>
                </list>
                <list>
                    <div slot="list-img"><img src="src/assets/works02.jpg"></div>
                    <div slot="list-tit">一周一练第三周：概念艺术</div>
                    <div slot="list-name">李浩</div>
                    <div slot="list-note">网页设计,游戏</div>
                    <span slot="num-good">3</span>
                    <span slot="num-see">199</span>
                    <span slot="num-time">60分钟</span>
                </list>
                <list>
                    <div slot="list-img"><img src="src/assets/works03.jpg"></div>
                    <div slot="list-tit">设计需求解剖大全手册</div>
                    <div slot="list-name">李浩</div>
                    <div slot="list-note">网页设计,游戏</div>
                    <span slot="num-good">3</span>
                    <span slot="num-see">199</span>
                    <span slot="num-time">60分钟</span>
                </list>
                <list>
                    <div slot="list-img"><img src="src/assets/works04.jpg"></div>
                    <div slot="list-tit">几个企业站</div>
                    <div slot="list-name">李浩</div>
                    <div slot="list-note">网页设计,游戏</div>
                    <span slot="num-good">3</span>
                    <span slot="num-see">199</span>
                    <span slot="num-time">60分钟</span>
                </list>
                <list>
                    <div slot="list-img"><img src="src/assets/works05.jpg"></div>
                    <div slot="list-tit">水墨形式感-游戏网页设计小支招3</div>
                    <div slot="list-name">李浩</div>
                    <div slot="list-note">网页设计,游戏</div>
                    <span slot="num-good">3</span>
                    <span slot="num-see">199</span>
                    <span slot="num-time">60分钟</span>
                </list>
                <list>
                    <div slot="list-img"><img src="src/assets/works06.jpg"></div>
                    <div slot="list-tit">水墨形式感-游戏网页设计小支招3</div>
                    <div slot="list-name">李浩</div>
                    <div slot="list-note">网页设计,游戏</div>
                    <span slot="num-good">3</span>
                    <span slot="num-see">199</span>
                    <span slot="num-time">60分钟</span>
                </list>
                <list>
                    <div slot="list-img"><img src="src/assets/works07.jpg"></div>
                    <div slot="list-tit">水墨形式感-游戏网页设计小支招3</div>
                    <div slot="list-name">李浩</div>
                    <div slot="list-note">网页设计,游戏</div>
                    <span slot="num-good">3</span>
                    <span slot="num-see">199</span>
                    <span slot="num-time">60分钟</span>
                </list>
                <list>
                    <div slot="list-img"><img src="src/assets/works08.jpg"></div>
                    <div slot="list-tit">水墨形式感-游戏网页设计小支招3</div>
                    <div slot="list-name">李浩</div>
                    <div slot="list-note">网页设计,游戏</div>
                    <span slot="num-good">3</span>
                    <span slot="num-see">199</span>
                    <span slot="num-time">60分钟</span>
                </list>
                <list>
                    <div slot="list-img"><img src="src/assets/works09.jpg"></div>
                    <div slot="list-tit">水墨形式感-游戏网页设计小支招3</div>
                    <div slot="list-name">李浩</div>
                    <div slot="list-note">网页设计,游戏</div>
                    <span slot="num-good">3</span>
                    <span slot="num-see">199</span>
                    <span slot="num-time">60分钟</span>
                </list>
                <list>
                    <div slot="list-img"><img src="src/assets/works10.jpg"></div>
                    <div slot="list-tit">水墨形式感-游戏网页设计小支招3</div>
                    <div slot="list-name">李浩</div>
                    <div slot="list-note">网页设计,游戏</div>
                    <span slot="num-good">3</span>
                    <span slot="num-see">199</span>
                    <span slot="num-time">一小时</span>
                </list>
            </div>
            <!--人物专访-->
            <div class="comWidth">
                <div class="people">
                    <tit :href="hrefPeople" :more="morePeople" :tit="titsPeople"></tit>
                    <div class="people-cont">
                        <ul class="clearfix">
                            <li v-for="p in ps">
                                <img :src="p.href" alt=""/>
                                <h2>{{p.tit}}</h2>
                                <p>{{p.text}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--推荐品牌-->
            <div class="brand">
                <div class="comWidth">
                    <tit :href="hrefBrand" :more="moreBrand" :tit="titsBrand"></tit>
                    <ul class="clearfix">
                        <li v-for="brand in brands">
                            <a :href="brand.href" target="_blank"><img :src="brand.src" alt=""/></a>
                            <p><a :href="brand.href" target="_blank">{{brand.text}}</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="news">
            <div class="comWidth clearfix">
                <div class="expert fl">
                    <h2 class="expert-tit">上周点评达人榜</h2>
                    <div class="expert-cont-box">
                        <ul class="expert-cont-tit clearfix">
                            <li @click="changeTab('总榜')" :class="{active:tab =='总榜'}">总榜</li>
                            <li @click="changeTab('指导榜')" :class="{active:tab =='指导榜'}">指导榜</li>
                            <li @click="changeTab('资深榜')" :class="{active:tab =='资深榜'}">资深榜</li>
                            <li @click="changeTab('设计师榜')" :class="{active:tab =='设计师榜'}">设计师榜</li>
                            <li @click="changeTab('助理榜')" :class="{active:tab =='助理榜'}">助理榜</li>
                        </ul>
                        <div v-show="tab == '总榜'" class="expert-cont">
                            <p><span class="expert-name"><i class="orange">1</i>李从亮1</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="orange">2</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -342</span></p>
                            <p><span class="expert-name"><i class="orange">3</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="blue">4</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -1002</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="blue">5</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="blue">6</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                        </div>
                        <div v-show="tab == '指导榜'" class="expert-cont">
                            <p><span class="expert-name"><i class="orange">1</i>李从亮2</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="orange">2</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -342</span></p>
                            <p><span class="expert-name"><i class="orange">3</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="blue">4</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -1002</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="blue">5</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="blue">6</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                        </div>
                        <div v-show="tab == '资深榜'" class="expert-cont">
                            <p><span class="expert-name"><i class="orange">1</i>李从亮3</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="orange">2</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -342</span></p>
                            <p><span class="expert-name"><i class="orange">3</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="blue">4</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -1002</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="blue">5</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="blue">6</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                        </div>
                        <div v-show="tab == '设计师榜'" class="expert-cont">
                            <p><span class="expert-name"><i class="orange">1</i>李从亮4</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="orange">2</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -342</span></p>
                            <p><span class="expert-name"><i class="orange">3</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="blue">4</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -1002</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="blue">5</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="blue">6</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                        </div>
                        <div v-show="tab == '助理榜'" class="expert-cont">
                            <p><span class="expert-name"><i class="orange">1</i>李从亮5</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="orange">2</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -342</span></p>
                            <p><span class="expert-name"><i class="orange">3</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="blue">4</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -1002</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="blue">5</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                            <p><span class="expert-name"><i class="blue">6</i>李从亮</span><span class="expert-num">74条</span><span class="expert-best">UI设计师</span><span class="expert-better">全国 -</span><span class="expert-good">江西 -</span></p>
                        </div>
                    </div>
                </div>
                <div class="expert fr">
                    <h2 class="expert-tit">推荐招聘</h2>
                    <div class="expert-cont">
                        <p><span class="expert-job">网页设计教师</span><span class="expert-school">湖南邵阳精英职业技术学校</span><span class="expert-time">17-07-19</span></p>
                        <p><span class="expert-job">网页设计教师</span><span class="expert-school">湖南邵阳精英职业技术学校</span><span class="expert-time">17-07-19</span></p>
                        <p><span class="expert-job">网页设计教师</span><span class="expert-school">湖南邵阳精英职业技术学校</span><span class="expert-time">17-07-19</span></p>
                        <p><span class="expert-job">网页设计教师</span><span class="expert-school">湖南邵阳精英职业技术学校</span><span class="expert-time">17-07-19</span></p>
                        <p><span class="expert-job">网页设计教师</span><span class="expert-school">湖南邵阳精英职业技术学校</span><span class="expert-time">17-07-19</span></p>
                        <p><span class="expert-job">网页设计教师</span><span class="expert-school">湖南邵阳精英职业技术学校</span><span class="expert-time">17-07-19</span></p>
                        <p><span class="expert-job">网页设计教师</span><span class="expert-school">湖南邵阳精英职业技术学校</span><span class="expert-time">17-07-19</span></p>
                    </div>
                </div>
            </div>
        </div>
        <!--footer-->
        <foot></foot>
    </div>

</template>
<script>

    import Top from './top.vue'
    import Banner from './banner.vue'
    import Tit from './tit.vue'
    import List from './list.vue'
    import Foot from './foot.vue'

    export default {
        name:"app",
        components: {
            Top,Banner,Tit,List,Foot
        },
        data:function(){
            return {
                more:"更多作品",
                href:"zht.html",
                tits:"主推作品",
                hrefPeople:"rw.html",
                morePeople:"更多专访",
                titsPeople:"人物专访",
                hrefBrand:"pp.html",
                moreBrand:"更多品牌设计公司",
                titsBrand:"推荐品牌",
                tab:"总榜",
                ps:[
                    {href:"src/assets/people.jpg","tit":"本期人物：袁康",text:"奢侈品牌主要针对高端消费群体，只针对有极致追求生活品味的人而定，别样人生，智享非凡品质，而普通电商追求的首要因素是针对销量策划来定页面以及详情卖点，常规电商类目都是以活动促销为依托，不同活动针对不同"},
                    {href:"src/assets/people1.jpg","tit":"上期人物：谢巍",text:"在小米待的这是第四年了，这四年小米的变化是很大的，小米在这几年的摸爬滚打终于找到了自己的方向，以前的“为发烧而生”不如改为“为探索而生”更加符合现在的品牌调性，小米的设计部门有很多比如小米商城，MIUI.."}
                ],
                brands:[
                    {href:"brand.html",src:"src/assets/bocweb.gif",text:"博采网络"},
                    {href:"brand.html",src:"src/assets/hanbang.gif",text:"汉邦未来"},
                    {href:"brand.html",src:"src/assets/htqd.jpg",text:"昊天前端"},
                    {href:"brand.html",src:"src/assets/kgu.gif",text:"空谷"},
                    {href:"brand.html",src:"src/assets/lonwin.gif",text:"中为"},
                    {href:"brand.html",src:"src/assets/mwchn.gif",text:"盛图制盛"},
                    {href:"brand.html",src:"src/assets/pidcn.gif",text:"博采网络"},
                    {href:"brand.html",src:"src/assets/sumaart.gif",text:"泰马"},
                    {href:"brand.html",src:"src/assets/webstudio.gif",text:"webstudio"},
                    {href:"brand.html",src:"src/assets/yongsy.gif",text:"雍熙"},
                    {href:"brand.html",src:"src/assets/manvision2.gif",text:"manvision"},
                    {href:"brand.html",src:"src/assets/manvision2.gif",text:"曼妙设计"},
                    {href:"brand.html",src:"src/assets/sinceidea.gif",text:"星狮创想"},
                    {href:"brand.html",src:"src/assets/goodmu.gif",text:"良木课堂"},
                    {href:"brand.html",src:"src/assets/lanqb.gif",text:"蓝铅笔"},
                    {href:"brand.html",src:"src/assets/daxue.gif",text:"淘宝大学"},
                    {href:"brand.html",src:"src/assets/lnest.gif",text:"港湾有巢"},
                    {href:"brand.html",src:"src/assets/bocweb.gif",text:"博采网络"}
                ]
            }
        },
        methods:{
            changeTab:function(val){
                this.tab = val;
            }
        }
    }
</script>
<style>
    .main{
        background-color: #f4f4f4;
    }
    .work .list{
        width:222px;

    }
    /*people*/
    .people{
        background-color: #fff;
        border:1px solid #ddd;
        padding: 0 28px 28px 28px;
    }
    .people-cont li{
        float: left;
        width:550px;
    }
    .people-cont li:last-child{
        border-left: 1px solid #eee;
        padding-left: 40px;
        padding-right: 0;
    }
    .people-cont li img{
        float: left;
        padding-right: 40px;
    }
    .people-cont li h2{
        font-size:18px;
        font-weight: normal;
        padding-bottom: 10px;
    }
    .people-cont li p{
        color:#888;
        font-size:14px;
        line-height: 24px;
        padding-right: 30px;
    }
    /*brand*/
    .brand{
        background-color: #ececec;
        border-top:1px solid #d9d9d9;
        margin-top: 40px;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    .brand ul li{
        float: left;
        margin-right: 15px;
        text-align: center;
        font-size:14px;
        padding-bottom: 30px;
    }
    .brand ul li:nth-child(9),
    .brand ul li:nth-child(18){
        margin-right: 0;
    }
    .brand ul li a{
        color:#888;
    }
    .brand ul li img{
        width:120px;
        height: 60px;
    }
    /*news*/
    .news{
        background-color: #3a3a3a;
        color:#999;
        padding: 50px 0;
    }
    .expert-tit{
        font-weight: normal;
        padding-bottom: 10px;
    }
    .expert-cont-tit li{
        float: left;
        font-size:16px;
        padding: 10px 20px;
        margin: 0 10px;
        color:#888;
    }
    .expert-cont-tit li:first-child{
        margin-left: 0;
    }
    .expert-cont-tit li.active{
        border-bottom:2px solid #008040;
        color:#008040;
    }
    .expert-cont{
        padding-top: 10px;
    }
    .expert-cont p{
        margin: 15px 0;
    }
    .expert-cont p span{
        font-size:13px;
        display: inline-block;
    }
    .expert-name{
        width:122px;
    }
    .expert-num,
    .expert-best{
        width:108px;
    }
    .expert-better{
        width:124px;
    }
    .expert-job{
        width:180px;
        display: inline-block;
        overflow: hidden;
    }
    .expert-school{
        width:130px;
        overflow: hidden;
        padding-right: 30px;
    }
    .news .fr{
        width:445px;
    }
    .news .fr p span{
        height: 16px;
        line-height: 16px;
        overflow: hidden;
        font-size:14px;
    }
    .expert-cont p span i{
        width:14px;
        height: 14px;
        line-height: 14px;
        text-align: center;
        font-style: normal;
        color:#fff;
        border-radius:50%;
        display: inline-block;
        margin-right: 15px;
    }
    .expert-cont p span i.orange{
        background-color: #f80;
    }
    .expert-cont p span i.blue{
        background-color: #008040;
    }

</style>