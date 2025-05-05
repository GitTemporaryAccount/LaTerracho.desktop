function modif(b,t){
    var lb=document.getElementsByClassName("btt");
    var lt=document.getElementsByClassName("para");
    for(var i=0;i<lb.length;i++){lb[i].className="bt";}
    for(var i=0;i<lt.length;i++){lt[i].style.zIndex=-1;}
    b.className="btt";
    t.style.zIndex=1;
}
