<template>
  <div id="app">
      <topTit></topTit>
      <top></top>
      <tit tit="联系我们"></tit>
  </div>
</template>

<script>
    import TopTit from './topTit.vue'
    import Top from './top.vue'
    import Tit from './tit.vue'

    export default {
        name: 'app',
        components:{
            TopTit,
            Top,
            Tit
        }
    }
</script>
<style src="./reset.css"></style>
