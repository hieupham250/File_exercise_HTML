let a = +prompt("Nhập a:");
let b = +prompt("Nhập b:");

if(isNaN(a) || isNaN(b)){
    console.log("a hoặc b ko hợp lệ");
} else {
    if(a==b){
        if(b==0){
            console.log("phương trình trên có vô số nghiệm");
        } else {
            console.log("phương trình trên vô nghiệm");
        }
    } else {
        let x = -b/a;
        console.log("phương trình có nghiệm là: " + x);
    }
}
