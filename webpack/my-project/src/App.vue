<template>
    <div class="top">
        <div class="fl" :title="message">cccd</div>
    </div>
</template>

<script>
module.exports ={
  data:function(){
        return{
            message:"hello world!",
            isShow:false
        }
    }
  ,
    methods:{
        seeMore: function(){
            this.isShow == true ? this.isShow= false: this.isShow= true;
        },
        see:function(){
            console.log($(".fl").html("helloss"));
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.moreMenu{
    position: relative;
}
 .downMenu{
     position: absolute;
     top:70px;
     left:0;
 }
</style>
