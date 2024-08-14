let n = +prompt("Nhập số dương bất kỳ:");
let factorial=1, i=1;
if(isNaN(n)){
    console.log("Số không hợp lệ");
} else {
    while (i<=n) {
        factorial = factorial * i;
        i++;
    }
    console.log(factorial);
}