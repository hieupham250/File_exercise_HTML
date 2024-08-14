let a = 6;
let result = ++a + a + a++ + ++a + a;

console.log(result);
console.log(a);

/* ++a tăng giá trị của a lên trước khi sử dụng biểu thức:
b1: tiến hành tăng giá trị của i lên 1 đơn vị
b3: trả về giá trị vừa đc tăng*/


/* a++ sẽ tăng sau khi sử dụng biểu thức:
b1: sao chép giá trị của biến
b2: tiến hành tăng giá rị của i lên 1 đơn vị
b3: trả về giá trị của biến i copy*/