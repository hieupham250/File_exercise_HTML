let arr = [1, 2, 3, 25, 25, 6, 2, 27, 27, 2, 9, 10, 2, 11, 2];

let answer = +prompt("Nhập số nguyên bất kỳ:");
if(isNaN(answer)){
    console.log('Số không hợp lệ');
} else {
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===answer){
            count++;
        }
    }
    console.log(`Số lần ${answer} xuất hiện trong mảng: ${count}`);
}