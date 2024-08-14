function confirmEnding(str, target) {
    const endOfString = str.slice(-target.length);
    return endOfString === target;
}

console.log(confirmEnding("Hello world", "world"));  
console.log(confirmEnding("Hello world", "orld"));   
console.log(confirmEnding("Hello world", "world2"));
