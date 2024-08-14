let bookList = [
    {
        author: "Nguyễn Nhật Ánh",
        name: "Tôi thấy hoa vàng trên cỏ xanh"
    },
    {
        author: "Tô Hoài",
        name: "dế mèn phiêu lưu ký"
    }
]

let answer = prompt("Nhập tên tác giả muốn tìm: ");
let flag = false;
for(let i=0;i<bookList.length;i++){
    if(answer === bookList[i].author){
        console.log(bookList[i]);
        flag = true;
        break;
    } else {
        flag = false;
    }
}
if(flag===false){
    console.log("không tìm thấy sách");
}