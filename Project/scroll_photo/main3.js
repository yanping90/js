$(function () {

    var timer, autoTimer;
    var mr = 0;
    var currentDot = 0;
    var running = 0;

    $.fn.Scroll = function (options) {
        var settings = $.extend({}, $.fn.Scroll.defaults, options);
        //动态生成圆点
        return this.each(function () {

            var _self = $(this);

            for (var i = 0; i < settings.scrollEle.children().length; i++) {
                settings.numBtn.append($("<li>").append($("<a>")));
            }

            _self.on("mouseenter", function () {
                clearInterval(autoTimer);
                settings.scrollBtn.removeClass("hide");
            }).on("mouseleave", function () {
                settings.scrollBtn.addClass("hide");
                autoTimer = setInterval(function () {
                    _self.trigger("roll", [1]);
                }, settings.delayTime);
            }).on("roll", function (e, unit) {
                if (running) return;
                running = 1;
                var i = 0;
                if (unit > 0) {
                    timer = setInterval(function () {
                        mr -= settings.steps * unit;
                        if (mr <= settings.maxSpan * unit) {
                            if (++i == unit) {
                                mr = 0;
                                clearInterval(timer);
                                running = 0;
                                for (var j = 0; j < unit; j++) {
                                    settings.scrollEle.append(settings.scrollEle.children().first());
                                }
                            }
                        }
                        settings.scrollEle.css("marginLeft", mr + "px");
                    }, settings.speed);
                } else {
                    mr = settings.steps * unit;
                    for (var j = 0; j < Math.abs(unit); j++) {
                        settings.scrollEle.prepend(settings.scrollEle.children().last());
                    }
                    timer = setInterval(function () {
                        mr -= settings.steps * unit;
                        if (mr >= 0) {
                            if (--i == unit) {
                                mr = 0;
                                clearInterval(timer);
                                running = 0;
                            }
                        }
                        settings.scrollEle.css("marginLeft", mr + "px");
                    }, settings.speed);
                }

                $(".select").removeClass("select");
                currentDot = (settings.scrollEle.children().length + currentDot + unit) % settings.scrollEle.children().length;
                settings.numBtn.children().eq(currentDot).addClass("select");
            }).trigger("mouseleave");

            settings.leftBtn.on("click", function (e) {
                e.stopPropagation();
                _self.trigger("roll", [-1]);
            });

            settings.rightBtn.on("click", function (e) {
                e.stopPropagation();
                _self.trigger("roll", [1]);
            });

            settings.numBtn.on("click", "li", function () {
                var len = $(this).index() - currentDot;
                if (len)
                    _self.trigger("roll", [len]);
            });

            settings.numBtn.children().eq(0).addClass("select");


        });

    }


    $.fn.Scroll.defaults = {
        scrollEle: $(".scroll"),
        scrollBtn: $(".scroll_btn"),
        leftBtn: $(".left_btn"),
        rightBtn: $(".right_btn"),
        numBtn: $(".scroll_num"),
        delayTime: 3000,
        steps: 20,
        maxSpan: -520,
        speed: 10
    };

    $(".container").Scroll();

})
