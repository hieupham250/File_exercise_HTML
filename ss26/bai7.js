const arr =  [1,5,6,3,2];

// [1, 5, 6], [5, 6, 3, 2]
// [1, 5, 6], [5, 6, 3], [6, 3, 2]
// [1, 5], [5, 6], [6, 3], [3, 2]
// [1], [5], [6], [3], [2]

const input = +prompt("nhập số bất kỳ:");
let flag = true;
// số lượng phần tử trong mảng con
let n = 1; // 1, 2, 3, 4
while(n<arr.length){
    for(let i=0;i<arr.length;i++){
        let subArr = [];
        // subArr.push(arr[i]); chỉ thêm đc 1
        for(let j=i;j<i+n;j++){
            if(arr[j] !== undefined){
                subArr.push(arr[j]);
            }
        }
        if(subArr.length===n){
            let sum = 0;
            for(let elemnet of subArr){
                sum += elemnet;
            }
            if(sum === input){
                console.log(subArr);
                flag = true;
                n=10; // đặt lại để dừng tất cả
            } else {
                flag = false;
            }
        }
    }
    n++;
}

if(flag === false){
    console.log("ko");
}