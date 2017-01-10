$(function () {
	$(".select_item").slice(1,3).each(function(i,el){
		$(el).addClass("disabled");
	});
	/*先定义一个下拉selector*/
	var subNav = $("<ul>").appendTo(document.body).addClass("select_sub");
	$(".select_Box").on("click", ".select_item", function (e) {
		e.stopPropagation();
		var _self = $(this);
		/*确定上级选中selected*/
		/*确定下拉内容*/
		var d1 = data;
		var hasUndefined = false;
		$(".select_item").slice(0,_self.index()).each(function (i, el) { //_self.prevAll()是从最近的开始。
			if($(el).attr("select") == undefined){
				hasUndefined = true;
				return;
			}
			d1 = d1[$(el).attr("select")][2];
		});
		if(hasUndefined){
			return;
		}
		/*根据data数组来判断是否有内容*/
		/*清空subNav*/
		subNav.show().empty();
		/*渲染下拉html*/
		$.each(d1,function(i,el){
			subNav.appendTo(_self).append($("<li>").html(d1[i][1]).attr("value", i));
		});
		/*for (var j = 0; j < d1.length; j++) {
			subNav.appendTo(_self).append($("<li>").html(d1[j][1]).attr("value", j));
		}*/
		if(d1.length === 1){
			subNav.children().eq(0).trigger("click");
			_self.addClass("disabled");
		}
	});

	$(".select_Box").on("click", ".select_sub li", function (e) {
		e.stopPropagation();
		var _self = $(this);
		var parentItem = _self.parents(".select_item");
		var hasChanged = _self.attr("value") != parentItem.attr("select");
		/*把选中的内容和索引给标题*/
		parentItem.html(_self.text() + '<i class="arrow"></i>').attr("select", _self.attr("value"));
		if(hasChanged){
			parentItem.nextAll().each(function(i,el){
				$(el).html("请选择"+ '<i class="arrow"></i>');
				$(el).next().addClass("disabled");
			});
		}
		parentItem.next().removeClass("disabled");
		subNav.empty();
		parentItem.next().trigger("click");
	});

	$(document).on("click",function(){
		$(".select_sub").hide();
	});
	$(".select_Box").on("click",function(){
		$(".select_sub").show();
	});
})