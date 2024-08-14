function findSubarray(arr, input) {
    let n = 1;
    while (n<arr.length) {
        for(let i=0;i<arr.length;i++){
            let subArr = [];
            for(let j=i;j<i+n;j++){
                if(arr[j] !== undefined){
                    subArr.push(arr[j]);
                }
            }
            if(subArr===n){
                let sum=0;
                for(let elemnet of subArr){
                    sum += elemnet;
                }
                if(input<sum){
                    console.log(subArr);
                    n = 100;
                }
            }
        }
        n++;
    }
}

const arr = [];
for(let i=0;i<6;i++) {
    arr.push(Math.floor(Math.random() * 12));
}
let input = +prompt("nhập 1 số ngyên:");
if(isNaN(input) || input<0){
    console.log("số không hợp lệ");
} else {
    console.log(arr);
    findSubarray(arr, input);
}