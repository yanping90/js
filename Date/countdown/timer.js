/**
 * Created by Chiao on 2017/1/10.
 */
$(function(){

	var checkTime = function(t){
		if(t<10){
			 t= "0"+t;
		}
		return t;
	}
	var showTime = function(){
		var d = new Date();
		var year = d.getFullYear();
		var month = d.getMonth()+1;
		var date = d.getDate();
		var day = d.getDay();
		var weekday = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
		var hour = d.getHours();
		var minute = d.getMinutes();
		var second = d.getSeconds();
		minute = checkTime(minute);
		second = checkTime(second);
		$(".timer").html(year+"年"+month+"月"+date+"日"+weekday[day]+hour+":"+minute+":"+second);
	}
	setInterval(showTime,500);
    var show = function(){
        var time = new Date();
        var endTime = new Date("2017/1/20,10:20:11");
        var leftTime = parseInt((endTime.getTime()- time.getTime())/1000);
        var d = parseInt(leftTime/(24*60*60));
        var h = parseInt(leftTime/(60*60)%24);
        var m = parseInt(leftTime/60%60);
        var s = parseInt(leftTime%60);
        $(".timer01").html(d+"天"+h+"小时"+m+"分"+s);
    }
    setInterval(show,500);
})
