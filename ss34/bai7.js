let table = document.getElementById("table");
let btn = document.getElementById("btn");
let rowCount = 2;
btn.onclick = function () {
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML ='cell 1 row 1';
    cell2.innerHTML = 'Cell 2 row ' + rowCount;
    cell3.innerHTML = 'Cell 3 row ' + rowCount;
    rowCount++;
}