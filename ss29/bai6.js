function capitalization(str) {
    arrFrom = str.split(' ');
    for(let i=0;i<arrFrom.length;i++){
        arrFrom[i] = arrFrom[i].charAt(0).toUpperCase() + arrFrom[i].slice(1);
    }
    let newStr = arrFrom.join(' ');
    return newStr;
}

let str = "Bài này khó quá :(("
let result = capitalization(str);
console.log("Chuỗi sau khi viết hoa chữ cái đầu: " + result);