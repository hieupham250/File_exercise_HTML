let input = document.getElementById("input");
let btn = document.getElementById("btn");
let ul = document.getElementById("list");
btn.onclick = function () {
    let text = document.createElement("li");
    text.innerHTML = input.value;
    ul.appendChild(text);
    input.value = "";
}