let information = {
    id: '',
    name: '',
    phone: '',
    address: ''
};

function inputinformation(){
    information.id = prompt("Nhập ID:");
    information.name = prompt("Nhập tên:");
    information.phone = prompt("Nhập số điện thoại:");
    information.address = prompt("Nhập địa chỉ:");
}

inputinformation();
console.log("ID: "+information.id);
console.log("Tên: "+information.name);
console.log("SDT: "+information.phone);
console.log("Địa chỉ: "+information.address);