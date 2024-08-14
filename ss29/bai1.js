function checkParity(x) {
    if(x%2==0){
        console.log(`${x} là số chẵn`);
    } else {
        console.log(`${x} là số lẻ`);
    }
}

let a = +prompt("Nhập a:");
let b = +prompt("Nhập b:");
let c = +prompt("Nhập c:");

checkParity(a);
checkParity(b);
checkParity(c);
