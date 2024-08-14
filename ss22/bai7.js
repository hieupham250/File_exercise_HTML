let a = +prompt("Nhập a:");
let b = +prompt("Nhập b:");
let c = +prompt("Nhập c:");

let denlta, x, x1, x2;
if(isNaN(a) || isNaN(b) || isNaN(c)){
    console.log("a hoặc b hoặc c ko hợp lệ");
} else {
    if(a==0){
        if(b==0){
            if(c==0){
                console.log("phương trình vô số nghiệm");
            } else {
                console.log("phương trình vô nghiệm");
            }
        } else {
            x = -c/b;
            console.log("phương trình có nghiệm duy nhất là: " +x);
        }
    } else {
        denlta = b*b-4*a*c;
        if(denlta<0){
            console.log("phương trình vô nghiệm");
        } else if(denlta==0){
            console.log("phương trình có nghiệm kép là: " -b/(2*a));
        } else {
            x1 = (-b + Math.sqrt(denlta))/(2*a);
			x2 = (-b - Math.sqrt(denlta))/(2*a);
            console.log(`phương trình có 2 nghiệm là: x1= ${x1} và x2 = ${x2}`);
        }
    }
}