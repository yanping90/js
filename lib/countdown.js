!function () {

	var CountDown = function (n, cb) {
		var _self = this;
		this.n = n >>0 ;
		this.callback = cb;
		this.timer = null;
		_self.timer = setInterval(function () {
			if (--_self.n <= 0) {
				_self.stop();
			}
			if(typeof _self.callback == "function"){
				_self.callback.apply(_self, [_self]);
			}
		}, 1000);
	};

	CountDown.prototype.stop = function () {
		clearInterval(this.timer);
	};
	// expose
	window.CountDown = CountDown;
}();