let n = +prompt("Nhập số dương bất kỳ:");
let i = 0;
if(isNaN(n)){
    console.log("Số không hợp lệ");
} else {
    while (i<=n) {
        console.log(i);
        i++;
    }
}