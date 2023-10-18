// Strict mode = Chế độ nghiêm ngặt trong Javascript

// "use strict";
// x = 10; // Lỗi
// console.log(x);

// var user = {
//    name: "Hoang An",
// };

// // delete user; // Lỗi
// console.log(user);

// var getMessage = function () {
//    "use strict";
//    // x = 10; //Lỗi
//    console.log(x);
// };

// getMessage();

// var total = 010 + 20 + 30; // Lỗi
// console.log(total);

// Hoisting

/*
- Đây là cơ chế mặc định của javascript
- Kỹ thuật tự động đẩy phần khai báo lên trước phần thực thi: biến (var), hàm (function declaration)
- Với khai báo biến: chỉ đẩy phần khai báo lên trước phần thực thi, không đẩy giá trị, không áp dụng với từ khóa let, const
*/

x = 10;
console.log(x);
var x; // -> Tồn tại hoisting

getMessage();
// function Declaration
function getMessage() {
   console.log("Hello F8");
}
getTotal();
// function expresstion
var getTotal = function () {
   console.log(10);
};
