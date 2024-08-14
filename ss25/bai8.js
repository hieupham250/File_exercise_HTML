function UCLN(x, y){
    while(x*y!=0){
        if(x > y){
            x %= y;
        } else {
            y %= x;
        }
    }
    return x+y;
}

let hight = +prompt("Nhập chiều dài:");
let width = +prompt("Nhập chiều rộng:");
if(isNaN(hight) || isNaN(width) || (hight,width)<0){
    console.log("chiều dài hoặc chiều rộng không hợp lệ");
} else {
    const ucln = UCLN(hight, width);
    const result = (hight*width)/(ucln*ucln);
    console.log(`hình vuông tối thiểu cắt từ HCN là: ${result}`);
}