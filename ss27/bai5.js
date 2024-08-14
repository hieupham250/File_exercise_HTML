let arr = [1, 2, 3, 1, 2, 4, 5, 4, 5, 6, 6];
let idndexUnique;
for(let i in arr){
    let currentIndex = arr[i];
    let isUnique = true;
    for(let j in arr){
        if(i !== j && currentIndex ===  arr[j]){
            isUnique = false;
            break;
        }
    }
    if(isUnique){
        idndexUnique = currentIndex;
        break;
    }
}
console.log(idndexUnique);