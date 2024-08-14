let input = document.getElementById("input");
let btn = document.getElementById("btn");
console.log(input);
btn.onclick = function () {
    if(input.value.length < 10){
        alert("thành công");
    } else {
        alert("Không hợp lệ");
    }
}