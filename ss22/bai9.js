let month = +prompt("Nhập tháng:");
let year = +prompt("Nhập năm:");
let result;
if(isNaN(month) || isNaN(year)){
    document.write("Tháng hoặc năm không hợp lệ");
} else {
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            result = `Tháng ${month} năm ${year} có 31 ngày`;
            break;
        case 4: case 6: case 9: case 11:
            result = `Tháng ${month} năm ${year} có 30 ngày`;
            break;
        case 2:
            if (year % 4 == 0 && year % 100 != 0) {
                result = `Tháng ${month} năm ${year} có 29 ngày`;
            } else {
                result = `Tháng ${month} năm ${year} có 28 ngày`;
            }
            break;
        default:
            result = `Tháng ${month} năm ${year} không hợp lệ`;
            break;
    }
    document.write(result);
}
