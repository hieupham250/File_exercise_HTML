let arr = [];
let a = +prompt("nhập số a:");
let b = +prompt("nhập số b:");
if(isNaN(a)||isNaN(b)|| a<0||b<0){
    console.log("Số không hợp lệ");
} else {
    if(a>b){
        for(let i=1;i<=a;i++){
            if(i%b==0){
                arr.push(i);
            }
        }
    } else {
        for(let i=1;i<=b;i++){
            if(i%a==0){
                arr.push(i);
            }
        }
    }
    console.log(arr);
}