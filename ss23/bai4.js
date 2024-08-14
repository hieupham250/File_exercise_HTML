let a = +prompt("Nhập số nguyên dương a:");
let b = +prompt("Nhập số nguyên dương b:");
let i = 1;
if(isNaN(a) || isNaN(b)){
    console.log("Số không hợp lệ");
} else {
    if(a<0 || b<0){
        console.log("a và b phải là số dương");
    } else {
        while(i<=a){
            if(i%b==0){
                console.log(i);
            }
        i++;
        }
    }
}