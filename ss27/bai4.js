let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let arrEven = [], arrOdd = [];
for(let i in arr){
    if(arr[i]%2===0){
        arrEven.push(arr[i]);
    } else {
        arrOdd.push(arr[i]);
    }
}
console.log(`mảng chẵn: ${arrEven}`);
console.log(`mảng lẻ: ${arrOdd}`);