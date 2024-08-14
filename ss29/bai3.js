function countCharacters(str){
    let removeApprox = str.replace(/\s/g, '');
    return removeApprox.length;
}

let input = prompt("nhập chuỗi:");
let result = countCharacters(input);
console.log(`số ký tự trong chỗi Là ${result}`);