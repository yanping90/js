$(function(){

	$.fn.tips = function(opt){
		var settings = $.extend({}, $.fn.tips.defaults,opt);
		var titleSpan = $("<span>").addClass(settings.toolTips).appendTo(document.body);
		return this.each(function () {
			var _self = $(this);
			_self.on("mouseover",function(){
				$(this).append(titleSpan.html($(this).attr("data-title")).show());
			});
			_self.on("mouseout",function(){
				titleSpan.hide();
			});
		});
	}
	$.fn.tips.defaults ={
		toolTips:"tips"
	};

	$(".words").tips({});
})
