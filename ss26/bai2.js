let arr = [1, 15, 5, 27, 9, 11, 13, 15];

let answer = +prompt("Nhập giá trị cần tìm:");
let find = false;
for(let i=0;i<arr.length;i++){
    if(arr[i]===answer){
        console.log(`phần tử được tìm thấy tại vị trí: ${i}`);
        find = true;
        break;
    }
}
if(!find){
    console.log("phần tử không tồn tại");
}