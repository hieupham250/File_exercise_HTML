function inputStudents() {
    let n = +prompt("Nhập số lượng sinh viên:");
    if (isNaN(n) || n <= 0) {
        console.log("Không hợp lệ");
    } else {
        let studentsArr = [];
        for (let i = 0; i < n; i++) {
            let student = {};
            student.id = prompt(`Nhập ID học sinh ${i + 1}:`);
            student.name = prompt(`Nhập tên học sinh ${i + 1}:`);
            studentsArr.push(student);
        }

        console.log("Danh sách sinh viên:");
        for (let i = 0; i < studentsArr.length; i++) {
            console.log(`Sinh viên ${i + 1}:`);
            console.log("ID: " + studentsArr[i].id);
            console.log("Tên: " + studentsArr[i].name);
        }
    }
}

inputStudents();
