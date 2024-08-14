let a = +prompt("Nhập số thứ 1:");
let b = +prompt("Nhập số thứ 2:");
let calculation = prompt("Nhập phép tính:")
let result;

if(isNaN(a) || isNaN(b)){
    console.log("số không hợp lệ");
} else {
    switch (calculation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        case '%':
            result = a % b;
            break;
        default:
            console.log("phép tính không hợp lệ");
            break;
    }
    console.log(`kết quả phép tính ${a} ${calculation} ${b} là: ${result}`);
}