var defaultScroll, rightScroll;

$(function () {
    var delay, int;
    var $s = $(".scroll");
    var ml = 0;
    var autoTimer = 0;
    defaultScroll = function () {
        var steps = parseInt($(".scroll").css("marginLeft"));
        if (steps > -520) {
            steps = steps - 20;
        } else {
            steps = 0;
            clearInterval(int);
            $(".scroll").append($(".scroll").children().eq(0));
        }
        $(".scroll").css("marginLeft", steps + "px");
    };

    rightScroll = function () {
        if (ml < 0) {
            ml = ml + 20;
            if (ml >= 0) {
                ml = 0;
                clearInterval(int);
            }
            $s.css("marginLeft", ml + "px");
        } else {
            ml = -520;
            $s.prepend($s.children().last());
            $s.css("marginLeft", ml + "px");
        }
    };

    // var int=setInterval(defaultScroll,14);

    $(".scroll_box").on("mouseenter",function(){
        clearInterval(autoTimer);
        $(".scroll_btn").removeClass("hide");
    });

    $(".scroll_box").on("mouseleave",function(){
        autoTimer = setInterval(function(){
            $(".scroll_box").trigger("roll:right", [1]);
        }, 3000);
    });


    $(".scroll_box").on("roll:left", function(){
        ml = -520;
        $s.prepend($s.children().last());
        $s.css("marginLeft", ml + "px");
        var timer = setInterval(function(){
            ml += 20;
            if (ml >= 0) {
                clearInterval(timer);
                ml = 0;
            }
            $s.css("marginLeft", ml + "px");
        }, 8);
    });

    $(".scroll_box").on("roll:right", function(e, unit){
        var i = 0;
        unit = unit || 1;
        var timer = setInterval(function(){
            ml -= 20 * unit;
            if (ml <= -520) {
                if (++i == unit) clearInterval(timer);
                ml = 0;
                $(".scroll").append($(".scroll").children().eq(0));
            }
            $s.css("marginLeft", ml + "px");
        }, 8);
    });

    $(".left_btn").on("click", function (e) {
        e.stopPropagation();
        $(".scroll_box").trigger("roll:left");
    });

    $(".right_btn").on("click", function (e) {
        e.stopPropagation();
        $(".scroll_box").trigger("roll:right", [2]);
    });

    $(".scroll_box").trigger("mouseleave");

})
