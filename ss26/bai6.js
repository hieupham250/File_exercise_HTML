let arr = [-2, 5, 1, -3, 8, -4, 7, -1, 6, -10, -25, 27, 18];
let indexPositive = 0;
console.log("Mảng trước khi đổi: ", arr);
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        let temp = arr[i];
        arr[i] = arr[indexPositive];
        arr[indexPositive] = temp;
        indexPositive++;
    }
}
console.log("Mảng sau khi di chuyển các số âm lên đầu và dương về cuối: ", arr);