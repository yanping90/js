$(function(){

    function StarLevel(opt){
        var _self = this;
        _self.settings = $.extend({},{
            defaultNum:0,
            el:".level"
        },opt);
        console.log(_self.settings.defaultNum);
        _self.$starSolid = $(".star-solid");
        _self.$starBorder = $(".star-border");
        _self.$item = $(_self.settings.el).find($(".level-item"));
        _self.lightOn(_self.settings.defaultNum);
        //绑定点亮事件
        $(_self.settings.el).on("mouseenter","li",function(){
            _self.lightOn($(this).index()+1);
            console.log(1);
        }).on("click","li",function(){
            _self.settings.defaultNum= $(this).index()+1;
        });
        $(_self.settings.el).on("mouseleave",function(){
            _self.lightOn(_self.settings.defaultNum);
        });
    }
    StarLevel.prototype = {
        lightOn:function(num){
            var _self =this;
            _self.$item.each(function(idx){
                if(idx<num){
                    $(this).find(_self.$starSolid).addClass("current").siblings().removeClass("current");
                } else {
                    $(this).find(_self.$starBorder).addClass("current").siblings().removeClass("current");
                }
            });
        }
    }
    window.StarLevel = StarLevel;

})
