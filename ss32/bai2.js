let information = {
    id: 1,
    name: "John",
    phone: 123456789,
    address: "123 Main St"
};
console.log("Thông tin ban đầu:");
console.log("ID: "+information.id);
console.log("Tên: "+information.name);
console.log("SDT: "+information.phone);
console.log("Địa chỉ: "+information.address);

delete information.address;
information.email = "john@gmail.com"

console.log("Thông tin mới:");
console.log("ID: "+information.id);
console.log("Tên: "+information.name);
console.log("SDT: "+information.phone);
console.log("Email: "+information.email);