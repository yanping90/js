$(function () {
    var $scroll = $(".scroll");
    var timer, autoTimer;
    var mr = 0;
    var currentDot = 0;
    var total = $scroll.children().length;
    var running = 0;

    //动态生成圆点
    for (var i = 0; i < $scroll.children().length; i++) {
        $(".scroll_num").append($("<li>").append($("<a>")));
    }

    //自定义滚动事件
    $(".scroll_box").on("mouseenter", function () {
        clearInterval(autoTimer);
        $(".scroll_btn").removeClass("hide");
    }).on("mouseleave", function () {
        $(".scroll_btn").addClass("hide");
        autoTimer = setInterval(function () {
            $(".scroll_box").trigger("roll", [1]);
        }, 3000);
    }).on("roll", function (e, unit) {
        if (running) return;
        running = 1;
        var i = 0;
        if (unit > 0) {
            timer = setInterval(function () {
                mr -= 20 * unit;
                if (mr <= -520 * unit) {
                    if (++i == unit) {
                        mr = 0;
                        clearInterval(timer);
                        running = 0;
                        for (var j = 0; j < unit; j++) {
                            $scroll.append($scroll.children().first());
                        }
                    }
                }
                $scroll.css("marginLeft", mr + "px");
            }, 10);
        } else {
            mr = 520 * unit;
            for (var j = 0; j < Math.abs(unit); j++) {
                $scroll.prepend($scroll.children().last());
            }
            timer = setInterval(function () {
                mr -= 20 * unit;
                if (mr >= 0) {
                    if (--i == unit) {
                        mr = 0;
                        clearInterval(timer);
                        running = 0;
                    }
                }
                $scroll.css("marginLeft", mr + "px");
            }, 10);
        }

        $(".select").removeClass("select");
        currentDot = (total + currentDot + unit) % total;
        $(".scroll_num").children().eq(currentDot).addClass("select");
    }).trigger("mouseleave");

    $(".left_btn").on("click", function (e) {
        e.stopPropagation();
        $(".scroll_box").trigger("roll", [-1]);
    });

    $(".right_btn").on("click", function (e) {
        e.stopPropagation();
        $(".scroll_box").trigger("roll", [1]);
    });

    $(".scroll_num").on("click", "li", function () {
        var len = $(this).index() - currentDot;
        if (len)
            $(".scroll_box").trigger("roll", [len]);
    });

    $(".scroll_num").children().eq(0).addClass("select");

});
