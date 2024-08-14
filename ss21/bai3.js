let answer = +prompt("nhập số:");
let result;
switch (answer) {
    case 2:
        result = "Monday";
        break;
    case 3:
        result = "Tuesday";      
        break;
    case 4:
        result = "Wednesday";       
        break;
    case 5:
        result = "Thursday";       
        break;
    case 6:
        result = "Friday";        
        break;
    case 7:
        result = "Saturday";      
        break;
    case 8:
        result = "Sunday";
        break;
    default:
        result = "không hợp lệ";
        break;
}

document.write(result);