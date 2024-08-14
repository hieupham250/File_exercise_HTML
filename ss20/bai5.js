let diemLy = +prompt("Nhập điểm môn vật lý:");
let diemHoa = +prompt("Nhập điểm môn hóa học:");
let diemSinh = +prompt("Nhập điểm môn Sinh học:");

let tongDiem = diemLy + diemHoa + diemSinh;
let diemTB = (diemLy + diemHoa + diemSinh)/3;
console.log("Tổng điểm: " + tongDiem);
console.log("Điểm trung bình: " + diemTB);