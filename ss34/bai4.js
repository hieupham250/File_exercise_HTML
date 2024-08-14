let h1 = document.getElementById("demo-id");
let btn = document.getElementById("btn");
btn.onclick = function () {
    h1.style.backgroundColor = "yellow";
    h1.style.color = "red";
}

// đưa về màu mặt định
// h1.style.backgroundColor = "";
// h1.style.color = "";