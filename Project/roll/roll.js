/**
 * Created by etc on 2016/12/27.
 */
$(function () {
	$.fn.roll = function (opt) {
		return this.each(function (i, el) {
			var settings = $.extend({}, $.fn.roll.defaults, opt);
			var int = 0;
			var delayTimer = 0;
			var _pause = false;
			var dirLeft = false;
			var dirRight = false;

			var _self = $(el);
			var roll;
			var dirBottomRight = function () {
				if (_pause) {
					return;
				}
				var steps = _self[settings.dir]();
				if (steps > 0) {
					steps -= settings.step;
				} else {
					steps = settings.maxSpan;
					_self.children().children().last().prependTo(_self.children());
					stop();
					delayTimer = setTimeout(function () {
						int = setInterval(roll, settings.speed);
					}, settings.delay);
				}
				steps = _self[settings.dir](steps);
			}

			var dirTopLeft = function () {
				if (_pause) {
					return;
				}
				var steps = _self[settings.dir]();
				if (steps < settings.maxSpan) {
					steps += settings.step;
				} else {
					steps = 0;
					_self.children().children().eq(0).appendTo(_self.children());
					stop();
					delayTimer = setTimeout(function () {
						int = setInterval(roll, settings.speed);
					}, settings.delay);
				}
				steps = _self[settings.dir](steps);
			}

			if (settings.topLeft) {
				roll = dirTopLeft;
			}

			if (settings.rightBottom) {
				roll = dirBottomRight;
			}

			var start = function () {
				int = setInterval(roll, settings.speed);
			};

			if (settings.autoStart) {
				start();
			}

			var stop = function () {
				clearInterval(int);
				clearTimeout(delayTimer);
			}
			var pause = function (b) {
				_pause = b;
			}
			if (settings.onOverOut) {
				_self.on("mouseover", "li", function () {
					pause(true);
				});
				_self.on("mouseout", "li", function () {
					pause(false);
				});
			}

			if (settings.prenextClick) {
				$(settings.preBtnSelector).on("click", function () {
					stop();
					roll = dirTopLeft;
					start();
				});
				$(settings.nextBtnSelector).on("click", function () {
					stop();
					//if(_self[settings.dir]() == 0){
						//steps = _self[settings.dir](settings.maxSpan);
					//}
					roll = dirBottomRight;
					start();
				});
			}
		});
	};
	$.fn.roll.defaults = {
		dir: "scrollTop"
		, maxSpan: 44
		, step: 2
		, speed: 60
		, delay: 1000
		, onOverOut: true
		, autoStart: true
		, rightBottom: true
		, topLeft: true
		, prenextClick: true
		, preBtnSelector: "#preBtn"
		, nextBtnSelector: "#nextBtn"
	};

	$(".menu02").roll({
		dir: "scrollLeft"
		, speed: 100
		, delay: 2000
		, maxSpan: 170
		, step: 5
		, rightBottom: false
	});

})




