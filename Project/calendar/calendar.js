/**
 * Created by Chiao on 2017/1/14.
 */
$(function(){
	//年份和月份设置默认值
	$("#year_tit").html(new Date().getFullYear()+"年").attr("data-ym",new Date().getFullYear());
	$("#month_tit").html(new Date().getMonth()+1+"月").attr("data-ym",new Date().getMonth());
	//把年份转化成月份 d为一个日期，例如:2016-1-1
	var changeMonth = function(d){
		return new Date(d).getFullYear()*12 + new Date(d).getMonth();
	}
	//计算年份的函数 m为月份
	var changeYM = function(ms,offset){
		return {
			y:Math.floor((ms+offset)/12),
			m:(ms+offset)%12
		};
	}

	//new Date(2017,1,0)会自动转化成2017,0,lastDay lastDay为最后一天。
	//每个月的天数
	var getLastDay = function(y,m){
		return new Date(y,m,0).getDate();
	}

	//是周几
	var getWeekday = function(y,m,d){
		return new Date(y+"-"+m+"-"+d).getDay();
	}

	var showDays = function(y,m){
		var fontDays = getWeekday(y,m+1,1);
		var lastMonthDays = getLastDay(y,m,0);
		for(var i = lastMonthDays - fontDays + 1;i<= lastMonthDays;i++){
			$(".calendar_date").append($("<li>").html(i).addClass("disabled"));
		}
		for(var j = 0;j< getLastDay(y,m+1);j++){
			$(".calendar_date").append($("<li>").html(j+1));
		}
		for(var l = 0; l< 6 - getWeekday(y,m+1,getLastDay(y,m+1));l++){
			$(".calendar_date").append($("<li>").html(l+1).addClass("disabled"));
		}

	}

	showDays($("#year_tit").attr("data-ym") >> 0,$("#month_tit").attr("data-ym") >>0);
	getLastDay($("#year_tit").attr("data-ym") >>0 ,$("#month_tit").attr("data-ym") >>0 );

	//上一月、下一月、上一年、下一年点击事件
	$(".arrowBtn").on("click",function(){
		var ms = changeMonth($("#year_tit").attr("data-ym")+"-"+($("#month_tit").attr("data-ym")+1));
		var offset = $(this).attr("data-num") >> 0;
		var result = changeYM(ms,offset);
		$("#year_tit").html(result.y + "年").attr("data-ym",result.y);
		$("#month_tit").html(result.m + 1 + "月").attr("data-ym",result.m);
		$(".calendar_date").empty();
		showDays($("#year_tit").attr("data-ym") >> 0,$("#month_tit").attr("data-ym") >>0);
	});
})
