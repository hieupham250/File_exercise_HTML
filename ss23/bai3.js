let i=1;
while(i<=100){
    console.log(i);
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    } else if(i%3==0){
        console.log("Fizz");
    } else if(i%5==0){
        console.log("Buzz");
    }
    i++;
}