let a = +prompt("Nhập a:");
let b = +prompt("Nhập b:");
let c = +prompt("Nhập c:");

let max,min,middler;
if(a > b && a > c){
    max = a;
} else if(b > a && b > c){
    max = b;
} else {
    max = c;
}

if(a < b && a < c){
    min = a;
} else if(b < a && b < c){
    min = b;
} else {
    min = c;
}

middler = (a+b+c) - (max+min);
console.log(min, middler, max)