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

            var _self = $(el);
            var roll = function () {
                if (_pause) {
                    return;
                }
                var steps = _self[settings.dir]();
                if (steps < settings.maxSpan) {
                    steps += settings.step;
                } else {
                    steps = 0;
                    _self.children().eq(0).appendTo(_self);
                    stop();
                    delayTimer = setTimeout(function () {
                        int = setInterval(roll, settings.speed);
                    }, settings.delay);
                }
                var steps = _self[settings.dir](steps);
            };
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
            /**if (typeof settings.callback == "function") {
				settings.callback.call(_self);
			}**/
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
    };

    /**$(".menu02").roll({
		dir: "scrollLeft"
		, delay: 2000
		, maxSpan: 160
		, step: 6
	});**/

})




