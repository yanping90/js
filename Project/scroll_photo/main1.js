
$(function () {
    var $s = $(".scroll");
    var ml = 0;
    var autoTimer = 0;

    $(".scroll_box").on("mouseenter", function () {
        clearInterval(autoTimer);
        $(".scroll_btn").removeClass("hide");
    });

    $(".scroll_box").on("mouseleave", function () {
        autoTimer = setInterval(function () {
            $(".scroll_box").trigger("roll:right", [1]);
        }, 3000);
    });

    $(".scroll_box").on("roll:left", function (e, unit) {
        unit = unit || 1;
        ml = -520 * unit;
        for (var j = 0; j < unit; j++) {
            $s.prepend($s.children().last());
        }
        $s.css("marginLeft", ml + "px");
        var i = 0;
        var timer = setInterval(function () {
            ml += 20 * unit;
            if (ml >= 0) {
                if (++i == unit) {
                    clearInterval(timer);
                }
                ml = 0;
            }
            $s.css("marginLeft", ml + "px");
        }, 8);
        $(".select").removeClass("select");
        currentDot = (3+currentDot-unit)%3;
        $(".scroll_num").children().eq(currentDot).addClass("select");
    });

    $(".scroll_box").on("roll:right", function (e, unit) {
        var i = 0;
        unit = unit || 1;
        var timer = setInterval(function () {
            ml -= 20 * unit;
            if (ml <= -520) {
                if (++i == unit) {
                    clearInterval(timer);
                }
                ml = 0;
                $(".scroll").append($(".scroll").children().eq(0));
            }
            $s.css("marginLeft", ml + "px");
        }, 8);
        $(".select").removeClass("select");
        currentDot = (currentDot+unit)%3;
        $(".scroll_num").children().eq(currentDot).addClass("select");

    });

    $(".left_btn").on("click", function (e) {
        e.stopPropagation();
        $(".scroll_box").trigger("roll:left", [1]);
    });

    $(".right_btn").on("click", function (e) {
        e.stopPropagation();
        $(".scroll_box").trigger("roll:right", [1]);
    });

    var currentDot = 0;
    $(".scroll_num").on("click", "li", function () {
        var len = $(this).index() - currentDot;
        $(".scroll_box").trigger(len > 0 ? "roll:right" : "roll:left", [Math.abs(len)]);
    });

    $(".scroll_box").trigger("mouseleave");
});
