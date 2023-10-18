//  Arrow function -> Hàm mũi tên

// 1. Không tham số
// const getMessage = () => {
//    console.log("Hello");
// };

// getMessage();

// 2. Có 1 tham số
// const getMessage = (msg) => {
//    console.log(msg);
// };
// getMessage("F8");

// 3. Có nhiều tham số
// const getMessage = (msg, type = "success") => {
//    console.log(msg);
//    console.log(type);
// };
// getMessage("F8");

// 4. Arrow function return
// C1:
// const sum = (a,b) => {
//    return a + b;
// }

// C2:
// const sum = (a, b) => a + b; // return luôn
// console.log(sum(10, 20));

// const getUser = () => ({
//    email: "hoangan@gamil.com",
// });
// console.log(getUser());

// 5. Closure Arrow function
// C1:
// const sum = (a, b) => {
//    return (b) => {
//       return a + b;
//    };
// };

// C2:
// const sum = (a) => (b) => a + b;

// const adder = sum(10);
// console.log(adder(20));
// console.log(adder(30));

// 6. IIFE Arrow function
// (() => {
//    console.log("Hello F8");
// })();

const users = [
   {
      id: 1,
      name: "User 1",
   },
   {
      id: 2,
      name: "User 2",
   },
   {
      id: 3,
      name: "User 3",
   },
];
// Lấy user theo id
// const getUser = (usersId) => users.find((user) => user.id === usersId);
// console.log(getUser(1));

document.body.innerHTML = `<h2>Danh sách user</h2>
${users.map((user) => `<h3>${user.name}</h3>`).join("")}
`;

/*
Lưu ý khi dùng Arrow
- Arrow không thay thế function truyền thống
- Arrow không binding được từ khóa this
- Arrow không binding được từ arguments
- Arrow không được hoisting
- Arrow không có thuộc tính prototype
- Arrow không nên sử dụng làm method trong Object (Không dùng đc this)
- Arrow không được dùng làm function Constructor
*/

// const user = {
//    email: "Hoangan@gami;.com",
//    getEmail: function () {
//       return {
//          number: 10,
//          getNumber: () => {
//             console.log(this);
//          },
//       };
//    },
// };

// user.getEmail().getNumber();

// const getMax = function () {
//    console.log(arguments);
// };

// Rest Parameter -> Tham số còn lại
// const getMax = (...args) => {
//    console.log(args);
// }; //Lỗi
// getMax(5, 10, 15);

// const User = () => {
//    this.email = "Hoang An";
// };

// const user = new User();
// console.log(user);

// Không có thuộc tính prototype
const getUser = () => {
   return "Hoang An";
};
console.log([getUser]);
console.log(getUser.prototype);

/*
Destructuring
Spread Operator
*/
