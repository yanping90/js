$(function(){

    var arrBrand=[
        ["01","北京"],
        ["02","上海"],
        ["03","广州"],
        ["04","深圳"],
        ["05","杭州"],
        ["06","武汉"],
        ["07","天津"],
        ["08","重庆"],
        ["09","苏州"],
        ["10","宁波"],
        ["11","合肥"],
        ["12","哈尔滨"],
        ["13","佛山"],
        ["14","济南"],
        ["15","东莞"],
        ["16","昆明"],
        ["17","贵阳"],
        ["18","金华"],
        ["19","邵阳"],
        ["20","岳阳"],
        ["21","濮阳"],
        ["22","钦州"]
    ];

    var $headerBrand = $(".header-brand");
    var $glyphiconMenuDown=".glyphicon-menu-down";
//    渲染建站品牌内容列表
    for(var i=0;i<arrBrand.length;i++){
        $(".header-brand-cont").append($("<li>").append($("<a>").html(arrBrand[i][1])).attr("value",arrBrand[i][0]));
    }

    //点击显示建站品牌内容列表时间
    $headerBrand.on("mouseenter",function(){
        var _self = $(this);
        _self.find($glyphiconMenuDown).animate({rotate: '-90'}, 500);
        _self.find(".header-brand-cont").animate({"height":"80px"},500);
    });
    $headerBrand.on("mouseleave",function(){
        var _self = $(this);
        _self.find($glyphiconMenuDown).animate({rotate: '0'}, 500);
        _self.find(".header-brand-cont").animate({"height":0},500);
    });
    //点击显示用户信息列表
    var  $headerUserPosition = $(".header-user-position");
    $headerUserPosition.on("mouseenter",function(){
        var _self = $(this);
        _self.addClass("active");
        _self.find($glyphiconMenuDown).animate({rotate: '180'}, 500);
        _self.find(".header-user-cont").animate({"height":"210px"},500);
    });
    $headerUserPosition.on("mouseleave",function(){
        var _self = $(this);
        _self.removeClass("active");
        _self.find($glyphiconMenuDown).animate({rotate: '0'}, 500);
        _self.find(".header-user-cont").animate({"height":0},500);
        console.log("mouseleave");
    });

})
