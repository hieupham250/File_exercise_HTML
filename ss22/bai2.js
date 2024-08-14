let a = +prompt("độ dài cạnh 1:");
let b = +prompt("độ dài cạnh 2:");
let c = +prompt("độ dài cạnh 3:");

if(isNaN(a) || isNaN(b) || isNaN(c)){
    console.log("độ dài cạnh không hợp lệ");
} else {
    if(a+b>c && a+c>b && b+c>a){
        console.log("đây là độ dài của 1 tam giác");
    } else {
        console.log("đây ko phải là độ dài của 1 tam giác");
    }
}
