let arr = [10, 3, 1, 40, 6, 8, 12, 5, 9, 15, 2];
let max=arr[0], min = arr[0];

for(let i in arr){
    if(max<arr[i]){
        max = arr[i];
    }
    if(min>arr[i]){
        min = arr[i];
    }
}
console.log(`max: ${max} , min: ${min}`);