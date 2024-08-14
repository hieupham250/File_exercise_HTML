let answer = +prompt("Nhập số bất kỳ");
let result;

if (isNaN(answer)) {
    result = "Giá trị không hợp lệ";
} else if (answer % 2 === 0) {
    result = "Chẵn";
} else {
    result = "Lẻ";
}

document.write(result);
