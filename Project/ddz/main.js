$(function(){

	//显示总牌数
	$(".sheet").on("cards:sheet",function(e,arr){
		$(this).html(arr.length);
	});
	var arrSheet = [1,2];
	$(".sheet").trigger("cards:sheet",[arrSheet]);

	//牌友名字显示
	$(".name").on("actor:name",function(e,id){
		$(this).html(id.substr(1));
	});
	$(".name").trigger("actor:name",["#actor01"]);

	//显示牌
	$(".showCards").on("cards:show",function(e,arr){
		for(var i=0;i<arr.length;i++){
			$(this).append($("<a>").html(arr[i]));
		}
	});
	$("#showCards").on("click",function(){
		var arrCards =[14,10,3,16];
		$(".showCards").trigger("cards:show",[arrCards]);
	});

	//倒计时
	function CountDown(n, cb) {
		this.n = n;
		this.callback = cb;
		var self = this;
		this.tick = function () {
			// before hook
			if (-- self.n <= 0) {
				clearInterval(self.timer);
			}
			// after hook
			self.callback.apply(self, [self.n]);
		}
		this.timer = setInterval(this.tick, 1000);
	}

	//打上家牌
	var lastCards;
	var currCards;


});
