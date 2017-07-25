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

    var $publicHeaderBrandCont = $("#public-header-brand-cont");
    var $publicHeaderBrand = $("#public-header-brand");
    var $glyphiconMenuDown = $(".glyphicon-menu-down");
//    渲染建站品牌内容列表
    for(var i=0;i<arrBrand.length;i++){
        $publicHeaderBrandCont.append($("<li>").html(arrBrand[i][1]).attr("value",arrBrand[i][0]));
    }

//    点击显示建站品牌内容列表时间
    $publicHeaderBrand.on("mouseenter",function(){
        var _self = $(this);
        _self.find($glyphiconMenuDown).animate({rotate: '-90'},500);
        $publicHeaderBrandCont.removeClass("hide");
    });

    $publicHeaderBrand.on("mouseleave",function(){
        var _self = $(this);
        _self.find($glyphiconMenuDown).animate({rotate: '0'},500);
        $publicHeaderBrandCont.addClass("hide");
    });


})
