let btn = document.getElementById("btn");

btn.addEventListener("click", function(event){
    event.preventDefault();
    ul.innerHTML = "";
    createStudent ();
});

function createStudent () {
    let id = document.getElementById("id").value;
    let names = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("email").value;
    let ul = document.getElementById("ul");
    let li = document.createElement("li");
    li.innerHTML = `ID: ${id}`;
    ul.appendChild(li);
    li = document.createElement("li");
    li.innerHTML = `Họ và tên: ${names}`;
    ul.appendChild(li);
    li = document.createElement("li");
    li.innerHTML = `Tuổi: ${age}`;
    ul.appendChild(li);
    li = document.createElement("li");
    li.innerHTML = `SĐT: ${tel}`;
    ul.appendChild(li);
    li = document.createElement("li");
    li.innerHTML = `Email: ${email}`;
    ul.appendChild(li);
}