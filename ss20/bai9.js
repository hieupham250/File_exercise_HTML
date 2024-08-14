let a = 5;
let b = "5";
console.log(a==b); /* dùng để kiểm tra xem 2 phần tử được kiểm tra đó có bằng nhau không, 
nó chỉ xét giá trị mà không quan tâm đến kiểu dữ liệu. Nếu a và b có giá trị bằng nhau thì
trả về true ngược lại là false (chuyển đổi kiểu dữ liệu trước khi so sánh)*/


console.log(a===b); /* dùng để kiểm tra xem 2 phần tử được kiểm tra đó có bằng nhau không
và nó còn xét xem kiểu dữ liệu có giống nhau ko. Nếu thỏa mãn 2 điều kiện trên thì trả về
true và ngược lại là false --> không chuyển đổi kiểu dữ liệu*/


console.log(a!=b); /* phủ định của "===" */


console.log(a!==b); /* phủ định của "==" */