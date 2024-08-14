let x = 5;

// Sử dụng if/else để kiểm tra giá trị của biến x
if (x === 5) {
    console.log("Biến x có giá trị bằng 5");
} else if (x > 5) {
    console.log("Biến x lớn hơn 5");
} else {
    console.log("Biến x nhỏ hơn 5");
}

/*Câu lệnh if/else được sử dụng để kiểm tra giá trị của biến x và thực hiện các hành động
tương ứng với mỗi điều kiện.*/

let dayOfWeek = 3;
let dayName;

// Sử dụng switch/case để kiểm tra giá trị của biến dayOfWeek
switch (dayOfWeek) {
    case 1:
        dayName = "Chủ nhật";
        break;
    case 2:
        dayName = "Thứ Hai";
        break;
    case 3:
        dayName = "Thứ Ba";
        break;
    case 4:
        dayName = "Thứ Tư";
        break;
    case 5:
        dayName = "Thứ Năm";
        break;
    case 6:
        dayName = "Thứ Sáu";
        break;
    case 7:
        dayName = "Thứ Bảy";
        break;
    default:
        dayName = "Không phải ngày trong tuần";
}

console.log("Ngày trong tuần là: " + dayName);

/* Câu lệnh switch/case được sử dụng để kiểm tra giá trị của biến dayOfWeek
và thực hiện các hành động tương ứng với từng giá trị case khác nhau.*/