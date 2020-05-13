var pics=document.getElementById("pics");
var n=1;
setInterval(function(){
    if(n>4) n=1
    pics.innerHTML="<img src='img/a%20("+n+").jpg' />";
    n++;
},2000);

var a=0;
function dolike(){
    a++;
    var btnlike=document.getElementById("btnlike")
    btnlike.innerHTML="いいね"+a;
}