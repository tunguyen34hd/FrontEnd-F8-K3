/*
Chuỗi trong Javascript

*/

var fullname = "Tạ Hoàng An";
var a = ""; //Là chuỗi rỗng
console.log(fullname, typeof fullname);

var fullname2 = String("Tạ Hoàng An");
console.log(fullname2, typeof fullname2);

// Khai báo như object
var fullname3 = new String("Tạ Hoàng An");
console.log(fullname3, typeof fullname3);
console.log(fullname3.length);

// Truy cập vào các thuộc tính, phương thức xử lý chuỗi (Được xây dựng từ hàm tạo string)

/*
tendoituong.tenThuocTinh
tendoituong.tenPhuongThuc()
*/

//Tự động tạo ra 1 object tạm thời để có thể truy cập vào các phương thức, thuộc tính của hàm tạo string

// document.write(fullname);

console.log(String.prototype);
var str = "xin chao F8 F8";
// 1. length => lấy độ dài của chuỗi
console.log(str.length);

// 2. charAt() => Lấy ký tự theo index (index bắt đầu từ 0)
console.log(str.charAt(1));
for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}

// 3. charCodeAt() => Lấy mã ASCII của ký tự theo index
console.log(str.charCodeAt(0));

// 4. concat() => Nối chuỗi
console.log(str.concat("f9", "f10", "f11"));

// 5. indexOf(value) => tìm vị trí xuất hiện đầu tiên của chuỗi con trong chuỗi cha, nếu không tìm thấy thì trả về -1
console.log(str.indexOf("F8"));

// 6. lastIndexOf(value) => tìm vị trí cuối
console.log(str.lastIndexOf("F8"));

// 7. includes(value) => Tìm chuỗi và trả về true/false
console.log(str.includes("f8"));

// 8. slice(start, end) => cắt chuỗi từ start đến end
console.log(str.slice(1, 5));
console.log(str.slice(5));
console.log(str.slice(-5));

//Bài tập: Lấy username của email
var email = "hoangan.web@gmail.com";
//hoangan.web
var position = email.indexOf("@");
var username = email.slice(0, position);
console.log(username);

// 9. replace(search, with) => Tìm kiếm và thay thế chuỗi đầu tiên
console.log(str.replace("F8", "F88"));

/*
Lưu ý: Hàm replace hỗ trợ thay thế dựa vào biểu thức chính quy (Regex)
*/

// 10. replaceAll(search, with) => Tìm kiếm và thay thế tất cả
console.log(str.replaceAll("F8", "F88"));

// 11. split() => Tách chuỗi thành mảng
console.log(str.split(" "));

// 12. toLowerCase() => Chuyển thành chữ thường
console.log(str.toLowerCase());

// 13. toUpperCase() => Chuyển thành chữ hoa
console.log(str.toUpperCase());

// 14. trim() => Loại bỏ khoảng trắng đầu và cuối chuỗi
var str = " Hoang An    ";
console.log(str);
console.log(str.trim());

// 15. trimStart() => Loại bỏ khoảng trắng đầu chuỗi

// 16. trimEnd() => Loại bỏ khoảng trắng cuối chuỗi

// 17. match() => Cắt chuỗi dựa vào biểu thức chính quy (Regex)
var content =
    "lorem 0123456789  aaaaaaaa 038916161561 ababbababa +8412313654566545646546565421";
// yêu cầu: Cắt ra các sđt trong đoạn văn trên
var pattern = /(0|\+84)\d{9}/g;
var phones = content.match(pattern);
console.log(phones);
