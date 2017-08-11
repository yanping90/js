$(function() {

    //自定義事件

    $(document).on("arrowDown",function(e,el,num,speed){
        $(this).find($(el)).animate({rotate: num}, speed);

    });
    //渲染ul列表
    function List(arr, el) {
        for (var i = 0; i < arr.length; i++) {
            //$(el).append($("<li>").append($("<a>").html(arr[i])));
            $(el).append($("<li>").append($("<a>").html(arr[i][1])).attr("value", arr[i][0]));
        }
    }

    var arrBrand = [
        ["01", "北京"],
        ["02", "上海"],
        ["03", "广州"],
        ["04", "深圳"],
        ["05", "杭州"],
        ["06", "武汉"],
        ["07", "天津"],
        ["08", "重庆"],
        ["09", "苏州"],
        ["10", "宁波"],
        ["11", "合肥"],
        ["12", "哈尔滨"],
        ["13", "佛山"],
        ["14", "济南"],
        ["15", "东莞"],
        ["16", "昆明"],
        ["17", "贵阳"],
        ["18", "金华"],
        ["19", "邵阳"],
        ["20", "岳阳"],
        ["21", "濮阳"],
        ["22", "钦州"]
    ];
    List(arrBrand, ".top-drop-down-list-brand");

    $(".top-left-item").on("mouseenter", function () {
        var _self = $(this);
        _self.find($(".top-drop-down-list")).animate({height: "80px"}, 500);
        _self.find($(".icon")).animate({rotate: '-90'}, 500);
        _self.addClass("active");
    });
    $(".top-left-item").on("mouseleave", function () {
        var _self = $(this);
        _self.find($(".top-drop-down-list")).animate({height: "0"}, 500);
        _self.find($(".icon")).animate({rotate: '0'}, 500);
        _self.removeClass("active");
    });

    $(".top-right-item").on("mouseenter", function () {
        var _self = $(this);
        _self.find($(".top-drop-down-list")).animate({height: "210px"}, 500);
        _self.find($(".icon")).animate({rotate: '180'}, 500);
        _self.addClass("active");
    });
    $(".top-right-item").on("mouseleave", function () {
        var _self = $(this);
        _self.find($(".top-drop-down-list")).animate({height: "0"}, 500);
        _self.find($(".icon")).animate({rotate: '0'}, 500);
        _self.removeClass("active");
    });

    $(".nav-cont-more").on("mouseenter", function () {
        var _self = $(this);
        _self.find($(".nav-cont-more-cont")).animate({height: "110px"}, 500);
        _self.find($(".icon")).animate({rotate: '180'}, 500);
        //$(this).trigger("arrowDown",[".icon","180",500]);
        _self.addClass("active");
    });

    $(".nav-cont-more").on("mouseleave", function () {
        var _self = $(this);
        _self.find($(".nav-cont-more-cont")).animate({height: "0"}, 500);
        _self.find($(".icon")).animate({rotate: '0'}, 500);
        _self.removeClass("active");
    });

    /*form*/
    var autoSuggests = [["001", "春风"], ["002", "春风十里不如你"], ["003", "春风十里不如你就剧情介绍"], ["004", "春风十里"], ["005", "我的前半生"]];

    var $navSearchTxt = $(".nav-search-txt");

    $("#nav-search-form").on("submit", function (e) {
        e.preventDefault();
        if ($navSearchTxt.val() == "") {
            $navSearchTxt.focus();
            return;
        }
    })

    $navSearchTxt.on("keyup", function () {
        var arrNew=[];
        $(".autoSuggest").empty();
        arrNew = [];
        //    先判断词库里有没有这个值，然后把包含这个词的值给一个新的数组
        if (autoSuggests.join("").indexOf($navSearchTxt.val()) == -1) {
            $(".autoSuggest").hide();
        } else {
            //    渲染新数组
            $(".autoSuggest").show();
            //第一种，普通方法
            //for (var i = 0; i < autoSuggests.length; i++) {
            //    if (autoSuggests[i][1].indexOf($navSearchTxt.val()) != -1) {
            //        arrNew[arrNew.length] = autoSuggests[i];
            //    }
            //}
            //第二种，用jQuery的filter方法，推荐这种，很赞！
            arrNew = autoSuggests.filter(function(value){
                return value[1].indexOf($navSearchTxt.val()) != -1;
            });
            console.log(arrNew);
            List(arrNew, ".autoSuggest");
        }
        console.log("keyup");
    });

        // 文字向上滚动
    var h = 0;
    var timer=0;
    var $scroll = $(".index-works-tit-scroll ul");
    $scroll.on("scrollTop",function(){
        var timeInterval = setInterval(function(){
            h -= 1;
            if(h<-18){
                h=0;
                clearInterval(timeInterval);
                $scroll.children().first().appendTo($scroll);
            }
            $scroll.css("marginTop",h+"px");
        },30);
    });

    $scroll.on("mouseleave",function(){
        timer = setInterval(function(){
            $scroll.trigger("scrollTop");
        },2000);
    });
    $scroll.on("mouseenter",function(){
        clearTimeout(timer);
    });
    $scroll.trigger("mouseleave");

//    tab
    $(".index-footer-contTab").on("click","li",function(){
        var _self = $(this);
        $(".active").removeClass("active");
        var $indexFooterContCont = $(".index-footer-contCont");
        _self.addClass("active");
        $indexFooterContCont.addClass("hide");
        $indexFooterContCont.eq(_self.index()).removeClass("hide");
    });
    $(".index-footer-tab").on("click","li",function(){
        var _self = $(this);
        $(".active").removeClass("active");
        var $indexFooterCont = $(".index-footer-cont");
        _self.addClass("active");
        $indexFooterCont.addClass("hide");
        $indexFooterCont.eq(_self.index()).removeClass("hide");
    });

////    rightNav
    $(".rightNav").on("mouseenter","li",function(){
        var _self = $(this);
        $(".rightNav-top").css({"opacity":0,left:"-120px"});
        _self.find($(".rightNav-top")) .animate({left:"-90px",opacity:1},500);
    });
    $(window).on("scroll",function(){
        var h = $(this).scrollTop();

        if(h>200){
            $(".returnTop").css("opacity",1);
        } else {
            $(".returnTop").css("opacity",0);
        }
    });


})