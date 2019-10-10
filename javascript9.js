var arr=[]
for(i=0;i<5;i++){
    arr[i]=prompt('nhap phan tu so '+i);
}
var x= prompt("nhap ky tu:") ;
var count =0;
document.write(getCount(x,arr));

function getCount(a,mang) {
    for(let i=0; i<mang.length; i++){
        if(a==mang[i]){
            count ++;
        }
    }
    if(i==mang.length && count==0){
        alert('-1');
    }else {
        return count;
    }

}