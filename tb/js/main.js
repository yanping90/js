$(function(){

    //top下拉菜单
    var $topDownTit = $(".top-down-tit"),
        $topItemDownCont = $(".top-item-down-cont");
    $(".top-tit").on("mouseenter","li.top-item-down",function(){
        console.log($(this).index());
        var _self = $(this);
        _self.find($topDownTit).addClass("active");
        _self.find($topItemDownCont).removeClass("hide");
    });
    $(".top-tit").on("mouseleave","li.top-item-down",function(){
        console.log($(this).index());
        var _self = $(this);
        _self.find($topDownTit).removeClass("active");
        _self.find($topItemDownCont).addClass("hide");
    });

//    search
    var $searchIco = $(".search-ico");
        $(".search-tab").on("click","li",function(){
            var _self = $(this);
            if(_self.index() != 0){
                $(".camera-ico i").addClass("hide");
            } else {
                $(".camera-ico i").removeClass("hide");
            }
            _self.addClass("active").siblings().removeClass("active");
    });
    //keydown、keypress得到的是触发键盘事件前的文本;
    //keyup,触发时整个操作事件的操作已经完成，得到的是触发键盘事件后的文本。
    $(".search-txt").on("keyup",function(){
        $searchIco.addClass("hide");
    });
    //点击二维码消失
    $(".app-delete").on("click",function(){
        $(".apps").addClass("hide");
    });
//    上传文件


})
