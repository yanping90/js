$(function(){

    //构造函数
    function StarRating(el,num){
        this.el=$(el);
        this.num=num;
        this.$li = this.el.find("li");
        this.lightOn(this.num);
        //this.event();
    };
    StarRating.prototype.lightOn = function(){
        var self = this;
        this.$li.each(function (idx) {
            if(idx<self.num){
                $(this).addClass("starOn");
            } else {
                $(this).removeClass("starOn");
            }
        });
    };
    //StarRating.prototype.event = function(){
    //    var self = $(this);
    //    this.el.on("mouseover","li",function(){
    //        self.lightOn(this.num);
    //    }).on("click","li",function(){
    //        self.num = $(this).index()+1;
    //    }).on("mouseout",function(){
    //        self.lightOn(this.num);
    //    });
    //};
    new StarRating(".star",2);



    //var num=2;
    //var $li = $(".star").find("li");
    //var starOn = function(num){
    //    $li.each(function(idx){
    //        if(idx<num){
    //            $(this).addClass("starOn");
    //        } else{
    //            $(this).removeClass("starOn");
    //        }
    //    });
    //}
    //starOn(2);
    //$(".star").on("mouseover","li",function(){
    //    starOn($(this).index()+1);
    //}).on("mouseout",function(){
    //    starOn(num);
    //}).on("click","li",function(){
    //    num = $(this).index()+1;
    //});

})
