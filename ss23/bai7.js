let n = +prompt("nhập số bất kỳ");
let sum = 0;
if(isNaN(n)){
    console.log("số không hợp lệ");
} else {
    if(n<=0){
        console.log("phải là số dương lớn hơn 0");
    } else {
        for(let i=1;i<=n/2;i++){
            if(n%i==0){
                sum+=i;
            }
        }
        if(sum==n){
            console.log(`${n} là số hoàn hảo`);
        } else {
            console.log(`${n} không là số hoàn hảo`);
        }
    }
}