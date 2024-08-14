let answer, a;
do{
    a = Math.floor(Math.random() * 11);
    answer = +prompt("nhập vào 1 số bất kì");
    if(isNaN(answer)){
        console.log("phải là chữ số");
    } else {
        if(answer > a){
            console.log("lớn hơn");
            continue;
        } else if(answer < a){
            console.log("nhỏ hơn");
            continue;
        } else {
            console.log("đúng");
            break;
        }
    }
}while(answer!=a);