$(function(){

    function Tab(opt){

        var _self  = this;
        _self.settings= $.extend({},{
            "triggerType":"click"
        },opt);

        _self.tabNav = _self.settings.tabEle.find("ul.tab-nav li");
        _self.tabCont = _self.settings.tabEle.find("div.tab-cont div.tab-item");
        if(_self.settings.triggerType === "click"){
            _self.tabNav.on("click",function(){
                _self.invoke($(this));
            });
        } else {
            _self.tabNav.on("mouseenter",function(){
                _self.invoke($(this));
            });
        }

    };

    Tab.prototype = {
        invoke:function(currentTab){
            var _self  = this;
            currentTab.addClass("active").siblings().removeClass("active");
            _self.tabCont.eq(currentTab.index()).addClass("current").siblings().removeClass("current");
            console.log();
        }
    };

    window.Tab = Tab;

})
