/*
Khai báo biến
var tenbien;

- Đặt tên biến bằng cú pháp camelCase
- Không được bắt đầu bằng số
- Chỉ được phép: chữ thường, hoa, dấu $, dấu gạch dưới, số
 */

// var customer;
// var customerName;
// var customerEmail;
// var customerShippingAddress;

// var user, userEmail, passWord;

// var course = "Front-End",
//     price = 5000,
//     teacher;

// console.log(customer);
// console.log(course);
// document.write(course);


var courseName = "Fullstack Web";
var comany = "F8"
// var welcome = "<h1>Khoá học " + courseName + " tại " + comany + "</h1>";

//backtick(`)

var welcome = `<div>
<h1>
Khóa học ${courseName} tại ${comany}</h1>
</div>`

document.write(welcome);
console.log(welcome);

//Tìm hiểu trước: Các toán tử, if else, switch case

/*
1. Số học



2. So sánh

3. Gán

4. Kết hợp (&&, ||, !)

5. Toán tử 3 ngôi

6. Toán tử nullish (??)

7. Toán tử &&

8. Truthy, Falsy
*/

// count = 1;
// total = count++ + ++count; //1 + 3
// console.log(total);

// var a = 10,
//   b = "20";

// var total = +a + +b;
// var total = b + a;

// console.log(total);
