let a = +prompt("Nhập a:");
let b = +prompt("Nhập b:");
let c = +prompt("Nhập c:");

let max;
if(a > b && a > c){
    max = a;
} else if(b > a && b > c){
    max = b;
} else {
    max = c;
}
let result = `Số lớn nhất là ${max}`;
console.log(result);