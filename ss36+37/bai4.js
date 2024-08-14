let a = document.getElementById("a");
let b = document.getElementById("b");
let sum = document.getElementById("sum");
let btn = document.getElementById("btn");
btn.onclick = function () {
    sum.value = Number(a.value) + Number(b.value);
}
