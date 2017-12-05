<template>
  <div id="app">
      <topTit></topTit>
      <top></top>
      <div class="top-cont">
          <div class="top-menu">
              <div class="width clearfix">
                  <cate></cate>
                  <topMenu class="fl"></topMenu>
              </div>
          </div>
      </div>
      <banner></banner>
  </div>
</template>

<script>
    import TopTit from './topTit.vue'
    import Top from './top.vue'
    import Tit from './tit.vue'
    import Cate from './cate.vue'
    import TopMenu from './topMenu.vue'
    import Banner from './banner.vue'

    export default {
        name: 'app',
        components:{
            TopTit,
            Top,
            Tit,
            Cate,
            TopMenu,
            Banner
        }
    }
</script>
<style src="./reset.css"></style>
<style>
    .top-cont{
        margin-top: 20px;
    }
    .top-cont .width{
        position: relative;
    }
    .top-menu{
        border-bottom: 2px solid #445aa8;
    }
    .cate{
        position: absolute;
        top:0;
        left:0;
    }
    .menu{
        margin-left: 220px;
    }
</style>
