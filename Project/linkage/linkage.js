/**
 * Created by Chiao on 2016/12/18.
 */

!function($){
	$.fn.linkage = function(opt){
		var settings = $.extend({}, $.fn.linkage.defaults,opt);
		var linkage = ".linkage";
		var menu = ".linkage-menu";
		var btn = ".linkage-btn";
		var subMenu = ".linkage-subMenu";
        var disabled = "disabled";
        var selected = "selected";
        var defaultText = "请选择";

		var subMenu = $("<ul>").addClass(subMenu.substr(1)).addClass(settings.newSubmenu).appendTo(document.body).hide();
		return this.each(function(i,el){
				var _self = $(el);
				for(i = 0;i<settings.levels;i++){
					_self.append($("<div>").addClass(menu.substr(1)).addClass(settings.newMenu)
						.append($("<a>").html(defaultText).addClass(btn.substr(1)).addClass(settings.newBtn)));
				}
                if(typeof settings.callback == "function"){
                    settings.callback.call(_self);
                }
                _self.children(menu).slice(1).addClass(disabled).addClass(settings.newDisabled);
                _self.children(menu).on("click",function(){
					var _self = $(this);
					//生成数组列表
					_self.append(subMenu.show().empty());
					var arr1= settings.arr;
                    var hasUndefined = false;
                    $(el).children(menu).slice(0,_self.index()).each(function(i,el){
						var _self = $(el);
						if(_self.attr("select") == undefined){
                            hasUndefined = true;
                            return;
						}
                        _self.next().removeClass(disabled).removeClass(settings.newDisabled);
                        arr1 = arr1[_self.attr("select")][2];
					});
                    if(hasUndefined){
                        return;
                    }
					//生成html
					$.each(arr1,function(i,v){
						$("<li>")
                            .append($("<a>").html(v[1]))
                            .attr("idx",i)
                            .attr("id",v[0])
                            .appendTo(subMenu);
					});

                    if(arr1.length === 1){
                        subMenu.children().eq(0).trigger("click");
                        _self.addClass(disabled).addClass(settings.newDisabled);
                    }else{
                        subMenu.children().eq(_self.attr("select")).addClass(selected).addClass(settings.newSelected);
                    }
				});

                _self.children(subMenu).on("click","li",function(e){
                    e.stopPropagation();
                    var _self = $(this);
                    //把选中的索引给按钮
                    var parentBtn = _self.parents(menu);
                    var hasChanged = parentBtn.attr("select") !== _self.attr("idx");
                    parentBtn.attr("select",_self.attr("idx")).attr("id",_self.attr("id"));
                    parentBtn.nextAll().each(function(i,el){
                        var _self = $(el);
                        if(hasChanged){
                            _self.children(btn).html(defaultText);
                            _self.addClass(disabled).addClass(settings.newDisabled);
                        }
                    });
                    parentBtn.children(btn).html(_self.text());
                    subMenu.hide();
                    parentBtn.next().trigger("click");
                });

			}
		);
	}
	$.fn.linkage.defaults = {
		levels: 3
        ,newMenu: ""
        ,newSubmenu: ""
        ,newBtn: ""
        ,newSelected: ""
        ,newDisabled: ""
        ,callback: function (){}
        ,arr:arr
	};
}(jQuery);