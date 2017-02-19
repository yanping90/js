(function($){
	$.fn.roll = function (opt) {

		var settings= $.extend({}, $.fn.roll.defaults,opt);

		return this.each(function (i, el) {
			var isRoll = false;
			var int=0;
			var delay=0;
			var _self =$(el);
			//滚动function
			var roll = function(){
				if(isRoll){
					return;
				}
				var steps = _self.css("marginTop");
				var stepsNum = steps.substr(0,steps.length-2);
				if(stepsNum >settings.maxSpan){
					stepsNum = stepsNum - settings.steps;
				} else{
					stepsNum = 0;
					stop();
					delay=setTimeout(function(){
						int=setInterval(roll,settings.speed);
					},settings.delayTime);
					_self.children().eq(0).appendTo($(el));
					stepsNum = stepsNum - settings.steps;
				}
				_self.css("marginTop",stepsNum+"px");
			};
			var start =function(){
				int=setInterval(roll,settings.speed);
			}
			var stop =function(){
				clearInterval(int);
				clearTimeout(delay);
			}
			var pause =function(a){
				isRoll = a;
			}
			if(settings.onOverOut){
				//滚动函数
				_self.on("mouseover",function(){
					pause(true);
				});
				_self.on("mouseout",function(){
					pause(false);
				});
			}

			if(settings.autoStart){
				start();
			}

		})
	}

	$.fn.roll.defaults ={
		maxSpan:-22,
		steps:2,
		speed:80,
		delayTime:2000,
		onOverOut:true,
		autoStart:true
	};
})(jQuery)
