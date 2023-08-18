/*
Hàm là 1 cú pháp trong lập trình, cho phép gom nhóm các đoạn chương trình con để thuận tiện trong quá trình tái sử dụng

Hàm thể hiện 1 chức năng, đặt tên bằng động từ

Dùng cú pháp camelCase

Cú pháp

1. Hàm ko tham số, có tham số
Định nghĩa hàm
function tenHam() {
    Noi dung hàm
}

function tenHam(thamso1, thamso2,...) {
    Noi dung ham
}
// Gọi Hàm
tenHam()
tenHam(doiso1, doiso2,...)


2. Hàm có giá trị trả về, hàm không có giá trị trả về

- Hàm có từ khóa return => Hàm return
=> Khi return dc gọi => Thoát hàm (Các đoạn code dưới return không hoạt động)
- Hàm ko có từ khóa return => Hàm void

3. Biến cục, bộ, biến toàn cục
- Biến cục bộ: Local Variable => Chỉ sử dụng trong phạm vi 1 hàm
- Biến toàn cục: Global Variable => Sử dụng trong phạm vi ngoài hàm
*/

// function getMessage() {
//     console.log("Xin chao F8");
// }

// getMessage(); // Lời gọi hàm chủ động

// function getMsg(msg, type = "succes") {
//     console.log(msg, type);
// }

// getMsg("F8", "error");

// Viết hàm sum(a, b) => Tính tổng
// function sum(a, b) {
//     var total = a + b;
//     // console.log(total);
//     return total;
// }

// console.log(sum(4, 5));

//
// function division(a, b) {
//     if (b !== 0) {
//         return a / b;
//     }
//     return "Không tính được"; //ko cần else khi áp dụng return, và sau return thì ko hoạt động
// }

// console.log(division(10, 2));

// function getMessage(value) {
//     var value = `Xin chào: ${value}`;
//     // Biến cục bộ => Khai báo trong hàm
//     console.log(value);
// }

// getMessage("F8");

function getMessage() {
    // msg => Biến toàn cục
    return msg;
}

function setMessage(value) {
    msg = value;
}

var msg = "Hoang An F8";
// Biến toàn cục cần khai báo trước khi gọi hàm

setMessage("Fullstack = F8");
console.log(getMessage());
