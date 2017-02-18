window.onload = function(){

	var myTab = function(e){
		var count=0;
		console.log(e.currentTarget, e.target);
		//
		var li = e.target.tagName.toLocaleLowerCase() == "li" ? e.target : e.target.parentNode;
		var prevEle = li.previousSibling;
		while(prevEle != null){
			if(prevEle.tagName && prevEle.tagName.toLocaleUpperCase() == "LI"){
				count++;
			}
			prevEle = prevEle.previousSibling;
		}

		//提取className
		var arrName = document.getElementsByClassName("line_cont")[count].className.split(" ");
		var filtered = function(value){
			return value != "show";
		}
		arrName.filter(filtered);

		if(document.getElementsByClassName("show")[0]){
			document.getElementsByClassName("show")[0].className=arrName.join(" ")+" hide";
		}

		document.getElementsByClassName("line_cont")[count].className = arrName.join(" ") +" show";
	}

	var els = document.getElementsByClassName("line_tit")[0];
	els.onclick = myTab;
	//for(var i=0;i<els.length;i++){
	//	if(els[i].tagName && els[i].tagName.toLocaleUpperCase() == "LI"){
	//		els[i].onclick = myTab;
	//	}
	//}
}
