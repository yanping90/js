function mymenu(ev){
	var els=document.getElementsByClassName("expend");
	var i;
	for(i=0;i<els.length;i++){
		els[i].className = " ";
	}
	ev.target.className="expend";
	ele=document.getElementById("menu");
	for(i=0;i<ele.childNodes.length;i++){
		if(ele.childNodes[i].nodeName = "li"){
			ele.childNodes[i].onclick=mymenu;
		}
	}

}