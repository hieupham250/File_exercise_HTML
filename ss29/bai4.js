function countCharacters(arr, characters) {
    let count = 0;
    for(let i in arr){
        if(arr[i]==characters){
            count++;
        }
    }
    return count;
}

let chain = prompt("Nhập chuỗi:");
let characters = prompt("Nhập 1 ký tự:");
let arr = Array.from(chain);
console.log(arr);
let result = countCharacters(arr, characters);
if(result>0){
    console.log(`ký tự ${characters} xuất hiện ${result} lần`);
} else {
    console.log(`ký tự ${characters} xuất hiện ${result} lần`);
}