/**
 * Created by Chiao on 2016/12/18.
 */

!function($){
	$.fn.linkage = function(opt){
		var settings = $.extend({}, $.fn.linkage.defaults,opt);
		var linkage = ".linkage";
		var menu = ".linkage-menu";
		var btn = ".linkage-btn";
		var btnContent = "请选择";
		var subMenu = ".linkage-subMenu";

		var subMenu = $("<ul>").addClass(subMenu.substr(1)).appendTo(document.body).hide();
		return this.each(function(i,el){
				var _self = $(el);
				for(i = 0;i<settings.levels;i++){
					_self.append($("<div>").addClass(menu.substr(1))
						.append($("<a>").html(btnContent).addClass(btn.substr(1))));
				}
				$(menu).on("click",function(){
					var _self = $(this);
					//生成数组列表
					_self.append(subMenu.show().empty());
					var arr1= arr;
					_self.slice(1,_self.index()).each(function(i,el){
						var _self = $(el);
						if(_self.attr("selected") != undefined){
							arr1 = arr1[_self.attr("selected")][2];
						}
					});
					//生成html
					$.each(arr1,function(i,v){
						$("<li>").append($("<a>").html(v[1])).attr("idx",i).appendTo(subMenu);
					});
				});
			}
		);
	}
	$.fn.linkage.defaults = {
		levels: 3
	};
}(jQuery);