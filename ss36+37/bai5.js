let input = document.getElementById("input");
let btn = document.getElementById("btn");
let ul = document.getElementById("list");

input.onkeyup = function () {
    if(input.length != 0){
        input.style.backgroundColor = "white";
    }
}

btn.onclick = function () {
    let text = document.createElement("li");
    text.innerHTML = input.value;
    ul.appendChild(text);
    input.value = "";
    if(input.value.length == 0){
        input.style.backgroundColor = "yellow";
    }
}