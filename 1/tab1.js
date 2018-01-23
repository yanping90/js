$(function(){

    function Tab(opt){
        var _self  = this;
        //参数配置
        _self.settings = $.extend({},{
            triggerType:"click",
            effect:1
        },opt);
        //显示切换效果
        _self.tabTit = _self.settings.tabEle.find("ul.tab-nav li");
        _self.tabCont = _self.settings.tabEle.find("div.tab-cont div.tab-item");
        if(_self.settings.triggerType==="click"){
            _self.tabTit.on("click",function(){
                _self.invoke($(this));
            });
        } else {
            _self.tabTit.on("mouseenter",function(){
                _self.invoke($(this));
            });
        }
        //默认第几个展示；
        if(_self.settings.effect>1){
            _self.invoke(_self.tabTit.eq(_self.settings.effect-1));
        }
    //    自动切换效果
        if(typeof _self.settings.auto == "number"){
           _self.timer = null;
            _self.counter=0;
            _self.autoPlay();
        }
    //auto的前提下
        if(_self.settings.auto){
            _self.tabTit.hover(function(){
            //    mouseenter
                clearInterval(_self.timer);
            },function(){
                //   mouseleave
                _self.autoPlay();
            });
        }
    };
    //方法
    Tab.prototype={
        invoke:function(currentTab){
            var _self = this;
            currentTab.addClass("active").siblings().removeClass("active");
            _self.tabCont.eq(currentTab.index()).addClass("current").siblings().removeClass("current");
            _self.counter = currentTab.index();
        },
        autoPlay:function(){
            var _self = this;
            var length = _self.tabTit.length;
            _self.timer=setInterval(function(){
                if(_self.counter<length){
                    _self.invoke(_self.tabTit.eq(_self.counter));
                    _self.counter++;
                } else {
                    _self.counter=0;
                }
            },_self.settings.auto);
        }
    };
    window.Tab = Tab;

})
