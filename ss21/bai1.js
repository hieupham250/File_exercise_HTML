let answer = +prompt("Bạn sinh năm bao nhiêu");

if(answer > 0){
    let age = 2024 - answer;
    document.write("bạn năm nay ", age, " tuổi");
} else {
    document.write("giá trị không hợp lệ");
}