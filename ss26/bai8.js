let arr = [1, 2, 1, 2, 3, 4, 3];
arrLenght = arr.length;
let i=0;

for(let i=0;i<arrLenght;i++){
    let count=1;
    for(j=i+1;j<arrLenght;j++){
        if(arr[i]==arr[j]){
            count++;
        }
    }
    if(count>=2){
        console.log(arr[i]);
    }
}