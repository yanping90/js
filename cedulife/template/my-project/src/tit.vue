<template>
    <div class="tit">
        <h4>{{tit}}</h4>
    </div>
</template>
<script>
    export default{
        name:"tit",
        props:["tit"]
    }
</script>
<style>
    .tit h4{
        font-size:18px;
        text-align: center;
    }
</style>