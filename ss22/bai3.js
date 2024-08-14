function checkNumber(n) {
    let flag = 0; // 0: ko phải số chính phương, 1: là số chính phương
    let i = 0;
    while(i <=n){
        if(Math.pow(i,2) == n){
            flag = 1;
            break;
        }
        i++;
    }
    return flag;
}

let n = +prompt("Nhập số kiểm tra:");
let check = checkNumber(n);
if(check == 1){
    console.log(n + " là số chính phương");
} else {
    console.log(n + " không phải là số chính phương");
}
