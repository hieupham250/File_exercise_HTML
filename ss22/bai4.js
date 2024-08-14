let year = +prompt("Nhập năm bất kỳ:");
let result;
if(isNaN(year)){
    result = "năm không hợp lệ";
} else if(year%4==0 && year%100!=0){
    result = `năm ${year} là năm nhuận`;
} else {
    result = `năm ${year} không là năm nhuận`;
}

console.log(result);