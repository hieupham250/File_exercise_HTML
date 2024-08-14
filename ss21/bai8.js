let weight = +prompt("Nhập cân nặng(kg):");
let height = +prompt("Nhập chiều cao(m):");
let bmi = weight/(height ** 2);
let result;

if(weight > 0 && height > 0){
    if (bmi<18.5){
        result = "Cân nặng thấp (gầy)";
    } else if(bmi>=40){
        result = "Béo phì, độ III";
    } else if(35<bmi && bmi<=39.9){
        result = "Béo phì, độ II";
    } else if(30<bmi && bmi<=34.9){
        result = "Béo phì, độ I";
    } else if(25<=bmi && bmi<=29.9){
        result = "Tiểu béo phì";
    } else if(bmi>=25){
        result = "Thừa cân";
    } else {
        result = "Bình thường";
    }
} else {
    document.write("cân nặng và chiều cao phải lớn hơn 0 và chiều cao phải nhập 0.0 (VD 1.70)");
}
console.log("chỉ số BMI: ",bmi);
document.write("Kết quả của bạn: ",result);