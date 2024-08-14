let names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];
let ul = document.createElement("ul");
for (let key in names) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(names[key]));
    ul.appendChild(li);
}
document.body.appendChild(ul);