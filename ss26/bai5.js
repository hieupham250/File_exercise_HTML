let arr = [1,2,3,4,5,6,7];
let lenghtArr = arr.length;
console.log('trước khi đảo ngược:', arr);
for(let i=0;i<Math.floor(lenghtArr / 2);i++){
    const temp = arr[i];
    arr[i] = arr[lenghtArr-1-i];
    arr[lenghtArr-1-i] = temp;
}
console.log('Mảng sau khi đảo ngược:', arr);