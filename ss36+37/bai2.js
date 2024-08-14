let btn = document.getElementById("btn");
let count=0;
btn.onclick = function () {
    count++;
    btn.innerText = "ON";
    if(count>1){
        btn.innerText = "OFF";
        count = 0;
    }
}
