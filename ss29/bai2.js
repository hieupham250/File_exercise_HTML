function daiNhat(arr) {
    let longest = "";
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i];
        }
    }
    return longest;
}

let arr = ["apple", "banana", "kiwi", "orange", "grape"];
console.log(arr);
let result = daiNhat(arr);
console.log(`phần tử dài nhất trong mảng: ${result}`);