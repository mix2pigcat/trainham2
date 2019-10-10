function calculator() {
    var a=document.getElementById('a').value;
    var b=1;
    for(let i=1; i<=a; i++){
        b=b*i;
    }document.getElementById('giaithua').value=b;
}