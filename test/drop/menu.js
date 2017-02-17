window.onload =function() {

    var myMenu = function(e){
        console.log(e.target.className);
        var els = document.getElementsByClassName("show");
        var elsName = e.target.className;
        for(var i =0;i<els.length;i++){
            //把找到的show去掉
            var arrName = els[i].className.split(" ");
                for(var j=0;j<arrName.length;j++){
                    if(arrName[j] == "show"){
                        arrName.splice(j,1);
                    }
                }
                els[i].className = arrName.join(" ");
            }
        e.target.className =elsName+ " show";

    }
    var els = document.getElementsByClassName("menu")[0].childNodes;
    for(var i=0;i<els.length;i++){
        if(els[i].tagName && els[i].tagName.toLocaleUpperCase() == "LI"){
            els[i].onclick = myMenu;
        }
    }

}
