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
var users = [];

function handleRegister(name, email, password) {
    if (!name || !email || !password) {
        console.log("Vui lòng điền đầy đủ thông tin.");
        return;
    }
    var newUser = {
        name: name,
        email: email,
        password: password,
        role: "user",
    };

    users.push(newUser);

    console.log(`Đăng kí thành công`);
}

function login(name, password) {
    var user = users.find(function (user) {
        return user.name === name && user.password === password;
    });

    if (user) {
        console.log("Thông tin người dùng:");
        console.log(user);
    } else {
        console.log("Thông tin đăng nhập không hợp lệ.");
    }
}
var dataRegister = handleRegister(
    "Nguyen Van A",
    "nguyenvana@email.com",
    "1234567"
);
var dataRegister = handleRegister(
    "Nguyen Van B",
    "nguyenvanb@email.com",
    "1234567"
);

var dataLogin = login("Nguyen Van B", "1234567");

console.log("Tài khoản đã đăng kí", users);
