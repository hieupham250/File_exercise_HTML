let arr = ["HTML", "CSS", "JavaScript", 1, 2];
count = arr.length;
for(let i in arr){
    if(isNaN(arr[i])){
        continue;
    } else {
        console.log(arr[i]);
        count--;
    }
}
if(count == arr.length){
    console.log("mảng ko có số nguyên");
}
