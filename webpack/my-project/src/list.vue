<template>
    <div class="list">
        <div class="list-img">
            <slot name="list-img"></slot>
        </div>
        <div class="list-tit">
            <slot name="list-tit"></slot>
        </div>
        <div class="list-name">
            <slot name="list-name"></slot>
        </div>
        <div class="list-note">
            <slot name="list-note"></slot>
        </div>
        <div class="list-num">
            <span><i><img src="src/assets/icon-dz.png" alt=""/></i><slot name="num-good"></slot></span>
            <span><i><img src="src/assets/icon-ll.png" alt=""/></i><slot name="num-see"></slot></span>
            <span><i><img src="src/assets/icon-time2.png" alt=""/></i><slot name="num-time"></slot>前</span>
        </div>
    </div>
</template>
<script>
    export default {
        name:"tit",
//        data:function(){
//            return {
//                src:"src/assets/works01.jpg"
//            }
//        }

    }
</script>
<style>
    .list{
        font-size:14px;
        background-color: #fff;
        border:1px solid #ddd;
        margin-bottom: 20px;
        float: left;
        margin-right: 20px;
    }
    .list:nth-child(6),
    .list:nth-child(11),
    .list:nth-child(16),
    .list:nth-child(21),
    .list:nth-child(26),
    .list:nth-child(31){
        margin-right: 0;
    }
    .list-name{
        padding: 10px 0;
    }
    .list-tit{
        padding-top: 15px;
        padding-left: 10px;
        overflow: hidden;
        width:100%;
    }
    .list-name,
    .list-note{
        color:#888;
        padding-left: 10px;;
    }
    .list-num{
        margin-top: 10px;
        padding-left: 10px;
        background-color: #f6f6f6;
        border-top:1px solid #e9e9e9;
        height: 30px;
        line-height: 30px;
        font-size:12px;
        font-weight: bold;
    }
    .list-num span{
        padding-right: 20px;
    }
    .list-num span:last-child{
        padding: 0;
    }
    .list-num i{
        position: relative;
        top:4px;
        padding-right: 5px;
    }
    .list-img img{
        width:220px;
        height: 145px;
    }

</style>