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
    for(var i=0;i<arrBrand.length;i++){
        $(".top-drop-down-list-brand").append($("<li>").append($("<a>").html(arrBrand[i][1])).attr("value",arrBrand[i][0]));
    }

    $(".top-left-item").on("mouseenter",function(){
        var _self = $(this);
        _self.find($(".top-drop-down-list")).animate({height:"80px"},500);
        _self.find($(".icon")).animate({rotate: '-90'}, 500);
        _self.addClass("active");
    });
    $(".top-left-item").on("mouseleave",function(){
        var _self = $(this);
        _self.find($(".top-drop-down-list")).animate({height:"0"},500);
        _self.find($(".icon")).animate({rotate: '0'}, 500);
        _self.removeClass("active");
    });

    $(".top-right-item").on("mouseenter",function(){
        var _self = $(this);
        _self.find($(".top-drop-down-list")).animate({height:"210px"},500);
        _self.find($(".icon")).animate({rotate: '180'}, 500);
        _self.addClass("active");
    });
    $(".top-right-item").on("mouseleave",function(){
        var _self = $(this);
        _self.find($(".top-drop-down-list")).animate({height:"0"},500);
        _self.find($(".icon")).animate({rotate: '0'}, 500);
        _self.removeClass("active");
    });

    $(".nav-cont-more").on("mouseenter",function(){
        var _self = $(this);
        _self.find($(".nav-cont-more-cont")).animate({height:"110px"},500);
        _self.find($(".icon")).animate({rotate: '180'}, 500);
        _self.addClass("active");
    });

    $(".nav-cont-more").on("mouseleave",function(){
        var _self = $(this);
        _self.find($(".nav-cont-more-cont")).animate({height:"0"},500);
        _self.find($(".icon")).animate({rotate: '0'}, 500);
        _self.removeClass("active");
    });


})
