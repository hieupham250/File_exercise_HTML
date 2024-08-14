function sumArr(arr, input) {
    let flag = true;
    let n = 1;
    while(n<arr.length){
        for(let i=0;i<arr.length;i++){
            let subArr = [];
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
                    n=10;
                } else {
                    flag = false;
                }
            }
        }
        n++;
    }
    if(flag === false){
        console.log("ko có mảng nào bằng "+ n);
    }
}

const arr =  [1, 5, 6, 3, 2, 6, 4, 8];
const input = +prompt("nhập số bất kỳ:");
sumArr(arr, input);