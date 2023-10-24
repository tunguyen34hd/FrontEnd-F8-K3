// Enhanced Object Literal
const username = "hoangan.web";
const email = "contact@fullstack.edu.vn";
const age = undefined;

// Tạo 1 object từ 2 biến trên với key giống tên biến
function getUsername() {
   return this.getUsername;
}
const user = {
   username,
   email,
   age,
   // getUsername: function () {
   //    return this.username;
   // },
   getUsername,
   getEmail() {
      return this.email;
   },
};

console.log(user);

const getOptions = ({ rootEl, timeout, animation }) => {
   console.log(rootEl, timeout, animation);
};
const rootEl = "#root";
const timeout = 10000;
const animation = true;
getOptions({ rootEl, timeout, animation });

// named argument -> Truyền các đối số theo tên
/*
Ví dụ: 1 hàm có 5 tham số => 3 tham số đầu tiên có giá trị mặc định
Tình huống: chỉ muốn thay đổi tham số thứ 4
*/

// const helloWorld = (a = 1, b = 2, c = 3, d, e) => {
//    console.log(`a = ${a}`);
//    console.log(`b = ${b}`);
//    console.log(`c = ${c}`);
//    console.log(`d = ${d}`);
//    console.log(`e = ${e}`);
// };

// helloWorld(1, 2, 3, 10, 30);

const helloWorld = ({ a = 1, b = 2, c = 3, d, e }) => {
   console.log(`a = ${a}`);
   console.log(`b = ${b}`);
   console.log(`c = ${c}`);
   console.log(`d = ${d}`);
   console.log(`e = ${e}`);
};

helloWorld({ d: 10, e: 30 });
