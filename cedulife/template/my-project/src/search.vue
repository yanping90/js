<template>
    <div class="top-search">
        <div class="form-cont clearfix">
            <select name="" id="select" class="ico fl">
                <option value="">班级</option>
                <option value="">课程</option>
                <option value="">学校</option>
            </select>
            <input type="text" class="top-txt fl" placeholder="请输入关键字">
            <input type="submit" class="top-btn fr ico" value="">
        </div>
        <div class="top-label">
            <a href="#">小学辅导</a>
            <a href="#">高中辅导</a>
            <a href="#">职业技能</a>
            <a href="#" class="orange">出国备考</a>
            <a href="#">成人英语</a>
        </div>
    </div>
</template>
<script>
    export default{
        name:"search"
    }
</script>
<style>
    .form-cont{
        width:590px;
        border:2px solid #445aa8;
        margin-top: 30px;
        font-size:12px;
        padding-left: 5px;
        border-radius:4px;
        height: 36px;
        line-height: 36px;
    }
    .top-search select.ico{
        -webkit-appearance: none;
        background-position: 48px -20px;
        width:58px;
        margin-right: 15px;
        height: 100%;
        padding-left: 10px;
    }
    .top-search select.ico option{
        color:#888;
        font-size:12px;
        padding: 10px 0;
    }
    .top-txt{
        color:#555;
        height: 100%;
        width: 425px;
    }
    .top-btn{
        height: 38px;
        width: 92px;
        background-color: #445aa8;
        cursor: pointer;
    }
    .top-search .ico{
        background-position: 35px -56px;
    }
    .top-label a{
        color:#999;
        padding: 8px 5px 0 5px;
        display: inline-block;
    }
    .top-label a.orange{
        color:#ee7800;
    }
    .top-label a:first-child{
        padding-left: 0;
    }
</style>