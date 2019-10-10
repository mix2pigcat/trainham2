function check() {
    let a=parseInt(document.getElementById('a').value);
    let b=parseInt(document.getElementById('b').value);
    let c=parseInt(document.getElementById('c').value);
    document.getElementById('min').value=getMin(a,b,c);
}

function getMin(x,y,z) {
    var min=x;
    if(x<y &&x<z){
        min=x;
    }else if(y<z){
        min = y;
    }else{
        min = z
    }return min
}