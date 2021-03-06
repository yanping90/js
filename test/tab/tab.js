window.onload = function(){
	var myTab = function(e){
		var count=0;
		console.log(e.currentTarget, e.target);
		//三目运算 e.currentTarget、e.target
		var li = e.target.tagName.toLocaleLowerCase() == "li" ? e.target : e.target.parentNode;
		//找到有show的className并把show去掉
		var eleShow = document.getElementsByClassName("show")[0];
		var filtered,eleArr;
		if(eleShow){
			eleArr = eleShow.className.split(" ");
			filtered = function(value){
				return value != "show";
			}
			eleShow.className = eleArr.filter(filtered).join(" ");
		}

		var prevEle = li.previousSibling;
		while(prevEle != null){
			if(prevEle.tagName && prevEle.tagName.toLocaleUpperCase() == "LI"){
				count++;
			}
			prevEle = prevEle.previousSibling;
		}

		//提取className
		var arrName = document.getElementsByClassName("line_cont")[count].className;

		document.getElementsByClassName("line_cont")[count].className = arrName +" show";
	}

	var els = document.getElementsByClassName("line_tit")[0];
	els.onclick = myTab;
	//for(var i=0;i<els.length;i++){
	//	if(els[i].tagName && els[i].tagName.toLocaleUpperCase() == "LI"){
	//		els[i].onclick = myTab;
	//	}
	//}
}
