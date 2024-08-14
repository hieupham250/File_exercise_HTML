let answer = +prompt("Nhập vào 1 số có 4 số:");
if(isNaN(answer) || answer.toString().length !== 4){
    console.log("Vui lòng nhập đúng một số có 4 chữ số.");
} else {
    let hangNghin = Math.floor(answer/1000);
    let hangChuc = Math.floor((answer%1000)/100);
    let hangTram = Math.floor((answer%100)/10);
    let donVi = answer%10;

    console.log("chữ số hàng nghìn: " + hangNghin);
    console.log("chữ số hàng chục: " + hangChuc);
    console.log("chữ số hàng trăm: " + hangTram);
    console.log("chữ số hàng đơn vị: " + donVi);
}