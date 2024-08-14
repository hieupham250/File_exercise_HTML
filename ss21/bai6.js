let maths = +prompt("Nhập điểm Toán");
let literature = +prompt("Nhập điểm Văn");
let english = +prompt("Nhập điểm Anh");

let DTB = (maths + literature + english)/3;
let result;
if(8.0<=DTB && DTB<=10){
    result = "GIỎI";
} else if(6.5<=DTB && DTB<=7.9){
    result = "KHÁ";
} else if(5.0<=DTB && DTB<=6.4){
    result = "TRUNG BÌNH";
} else {
    result = "YẾU";
}

document.write(result);