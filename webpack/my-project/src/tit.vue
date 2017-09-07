<template>
    <div class="tit clearfix">
        <h2 class="fl">{{tit}}</h2>
        <a :href="href" class="fr">{{more}}</a>
    </div>
</template>
<script>
    export default {
        name:"tit",
        props:["tit","more","href"]
    }
</script>
<style>
.tit{
    padding: 20px 0 20px 0;
}
.tit h2{
    font-size:16px;
    color:#444;
}
.tit a{
    color:#999;
    font-size:14px;
}
</style>