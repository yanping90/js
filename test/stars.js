window.onload = function(){
    function stars(){
        var numTxt = document.getElementById("txt_num").value;
        if(typeof numTxt != "string"){
            return console.log("false");
        }
        var star="";
        var i, j;
        for(i=0;i<numTxt;i++){
            for(var k=numTxt-1;k>i;k--){
                star += " ";
            }
            for(j =0;j<2*i+1;j++){
                star += "*";
            }
            star +="<br/>";
        }
        return star;
    };
    document.getElementById("btnClick").addEventListener("click",function(){
        document.getElementById("content").innerHTML = stars();
    });
}
