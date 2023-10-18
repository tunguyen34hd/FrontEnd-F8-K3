/*
Scope: Phạm vi

1. Global Scope -> Phạm vi toàn cục -> Sử dụng ở bất kỳ đâu

2. Local Scope -> Phạm vi cục bộ -> Sử dụng trong phạm vi mà biến, hàm được khai báo

2.1. Funcion Scope -> Phạm vi trong hàm
2.3. Block Scope -> Phạm vi trong 1 khối: if else, for, while,...

Tip: dựa vào dấu ngoặc nhọn {} => Block Scope
*/

// var a = 10;
// if (a) {
//    // Local Scope (Block)
// }

// function getMessage() {
//    // Local Scope (function)
// }

// var user = {
//    name: "Hoang An",
// };

// Từ khóa khai báo biến: let, const
/*
let, const
- Chỉ hoạt động trong scope mà nó được khai báo
- Trong cùng 1 scope chỉ được phép khai báo 1 lần

let: Dược phép thay đổi.

const: Không được phép thay đổi, gần luôn khi khai báo
*/

// for (let i = 1; i <= 5; i++) {
//    console.log(i);
// }

// console.log(i);

// function scope
function getMessage() {
   let a = 10;
   let b = 20;
   // if scope
   if (a >= 10) {
      let b = 30;
   }
   console.log(b);
}

getMessage();

const user = "Hoang An";
// user = "F8"; // Lỗi
/*
const: Lưu trữ object, array, function

const: Phạm vi giống y hệt let
*/

const customer = { email: " Hoangan", age: 31 };
customer.email = "contac@fs.vn";

const sum = function () {
   return 1 + 2;
};

// Hoisting

// x = 10;
// console.log(x);
// let x;
// const x = 10;

const auth = {
   start: function () {
      this.showForm();
      this.eventLogin();
   },
   showForm: function () {},
   handleSubmit: function () {},
   eventLogin: function () {},
};

auth.start();
