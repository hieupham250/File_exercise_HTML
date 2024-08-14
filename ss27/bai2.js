let arr = [];

let a = +prompt("Nhập a:");
let b = +prompt("Nhập b:");
if(isNaN(a)||isNaN(b)){
    console.log("Số a và b không hợp lệ");
} else {
    for(let i=a;i<b;i++){
        arr.push(i);
    }
    console.log(arr);
}