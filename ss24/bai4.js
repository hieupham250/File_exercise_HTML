let n = +prompt("Nhập số nguyên dương:");
let tong=0,m;

if(isNaN(n) || n<0){
    console.log("Số không hợp lệ");
} else {
    for(m=1;m<=n;m++){
        tong = tong + m*m;
        if(tong>n){
            break;
        } else if(m%2===0){
            console.log(`Bình phương ${m} = ${m*m}`);
        }
    }
}