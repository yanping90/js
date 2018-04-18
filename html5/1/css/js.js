$(function(){
    function Slide(opt){
        var _self = this;
        _self.settings = $.extend({},{
            el:".banner",
            spaceTime:2000,
            opacityImg:.6
        },opt);
        _self.loop=0,
        _self.timer=0;
        _self.bannerImg = $(_self.settings.el).find(".banner-img");
        _self.bannerDot = $(_self.settings.el).find(".banner-dot");
        _self.imgs = _self.bannerImg.children();
        //自然生成圆点
        for(var i=0;i<_self.imgs.length;i++){
            _self.bannerDot.append($("<li>").html(i+1));
        }
        _self.bannerImg.on("mouseenter","li",function(){
            clearInterval(_self.timer);
            console.log(_self.timer+"mouseenter");
        });
        _self.bannerImg.on("mouseleave","li",function(){
            _self.autoPlay();
        });
        _self.bannerDot.on("mouseenter","li",function(e){
            e.stopPropagation();
            _self.loop= $(this).index();
        });
        _self.autoPlay();

    }
    Slide.prototype = {
        autoPlay:function(){
            var _self = this;
            _self.timer= setInterval(function(){
                _self.imgs.eq(_self.loop).addClass("current").siblings().removeClass("current");
                _self.bannerDot.children().eq(_self.loop).addClass("current").siblings().removeClass("current");
                _self.imgs.eq(_self.loop).animate({"opacity":_self.settings.opacityImg},1000);
                _self.imgs.animate({"opacity":1},1000);
                _self.loop++;
                if(_self.loop>_self.imgs.length){
                    _self.loop=0;
                }
            },_self.settings.spaceTime);

        }
    };
    window.Slide = Slide;
})
