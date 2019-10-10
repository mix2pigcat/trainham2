var arr=[]
for(i=0;i<5;i++){
     arr[i]=prompt('nhap phan tu so '+i);
}
document.write(arr+'<br/>');
document.write(resever(arr));
 function resever (manga) {
     var mangb=[]
     for(let i=0; i<manga.length; i++){
         mangb[i]=manga[(manga.length-1)-i];
     }return mangb;

 }