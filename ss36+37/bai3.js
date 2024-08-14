let input = document.getElementById("input");
let div = document.getElementById("div");

// cách 1
input.onkeyup = function(){
    div.innerHTML = input.value;
}

//cách 2
input.onkeydown = function(){
    div.innerText = input.value;
}