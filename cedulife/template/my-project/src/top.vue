<template>
    <div class="top clearfix width">
        <div class="fl top-logo"><img src="./assets/logo.jpg" alt=""/></div>
        <search class="fl"></search>
    </div>
</template>
<script>
    import Search from './search.vue'

    export default{
        name:"top",
        components:{
            Search
        }
    }
</script>
<style>
    .top-logo{
        margin-right: 100px;
    }
    .top-logo img{
        width:100%;
        margin-top: 20px;
    }
</style>