let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ctr = arr.length;
let temp, index;
while(ctr>0){
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arr[ctr];
    arr[ctr] = arr[index];
    arr[index] = temp;
}
console.log(arr);