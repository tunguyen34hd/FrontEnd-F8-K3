/*
Tạo một hàm register nhận vào nhiều tham số để khởi tạo ra một mảng chứa các đối tượng có cấu trúc như sau:
Tên
Số
Điện thoại

Yêu cầu:
Kiểm tra tất cả thông tin có đầy đủ không, nếu không đủ, báo lỗi và dừng chương trình.
Nếu đăng ký thêm một lần nữa, phải trả về được thông tin 2 người.
Tự động thêm role là user cho mỗi đối tượng.
Tạo một hàm login nhận vào 2 tham số email và password.

Yêu cầu:
Nếu thông tin hợp lệ với một trong các đối tượng đã đăng ký, trả về thông tin của đối tượng đó.
Nếu không, báo cho người dùng rằng “Thông tin đăng nhập không hợp lệ”.
*/

var User = function (name, password, email) {
   this.name = name;
   this.password = password;
   this.email = email;
};

var handleRegister = function (name, password, email) {
   var errors = {};
   if (!name) {
      errors.name = "Tên không được để trống";
   }
   if (!password) {
      errors.password = "Mật không không được để trống";
   }
   if (!email) {
      errors.email = "Email không được để trống";
   }
   if (Object.keys(errors).length) {
      return errors;
   }

   var user = new User(name, password, email);
   user.role = "user";

   data.push(user);
   return user;
};

var handleLogin = function (email, password) {
   var dataLogin = data.find(function (user) {
      return user.email === email && user.password === password;
   });
   if (dataLogin) {
      return dataLogin;
   }
};
var data = [];
var register1 = handleRegister(
   "Nguyen Van A",
   "123456",
   "nguyenvana@gmail.com"
);
var register2 = handleRegister(
   "Nguyen Van B",
   "1234567",
   "nguyenvanb@gmail.com"
);
var dataLogin = handleLogin("nguyenvana@gmail.com", "123456");
console.log(register1);
// console.log(dataLogin);
// console.log(data);

//_________________________________________________________

// var users = [];
// function handleRegister(name, email, password) {
//     if (!name || !email || !password) {
//         console.log("Vui lòng điền đầy đủ thông tin.");
//         return;
//     }
//     var newUser = {
//         name: name,
//         email: email,
//         password: password,
//         role: "user",
//     };

//     users.push(newUser);

//     console.log(`Đăng kí thành công`);
// }

// function login(name, password) {
//     var user = users.find(function (user) {
//         return user.name === name && user.password === password;
//     });

//     if (user) {
//         console.log("Thông tin người dùng:");
//         console.log(user);
//     } else {
//         console.log("Thông tin đăng nhập không hợp lệ.");
//     }
// }
// var dataRegister = handleRegister(
//     "Nguyen Van A",
//     "nguyenvana@email.com",
//     "1234567"
// );
// var dataRegister = handleRegister(
//     "Nguyen Van B",
//     "nguyenvanb@email.com",
//     "1234567"
// );
// var dataLogin = login("Nguyen Van B", "1234567");
// console.log("Tài khoản đã đăng kí", users);
