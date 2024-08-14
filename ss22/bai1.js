let a = +prompt("Nhập a:");
let b = +prompt("Nhập b:");
let result;
if(isNaN(a) || isNaN(b)){
    result = "giá trị a hoặc b không hợp lệ";
} else if(a%b==0 && b%a==0){
    result = "a và b đều chia hết cho nhau";
} else {
    result = "a và b không chia hết cho nhau";
}

console.log(result);