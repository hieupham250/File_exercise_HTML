function search(arr, str) {
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i].includes(str)){
            result.push(arr[i]);
        }
    }
    return result;
}

let arr = ["Chuỗi 1", "Chuỗi 2", "Chuỗi 3", "Chuỗi 4", "Chuỗi 5"];
let input = prompt("nhập chuỗi cần tìm:");
let strSearchResults = search(arr, input);
console.log(strSearchResults);