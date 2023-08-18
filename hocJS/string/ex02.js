/*
Bai 1: Ktra 1 chuỗi có viết hoa hết hay không?
*/

var fullname = "TẠ HOÀNG AN";

if (fullname === fullname.toUpperCase()) {
    console.log("Đúng");
} else {
    console.log("Sai");
}

/*
Bai 2: Chuyển họ và tên thành dạng tên chuẩn

var fullname = 'tạ hoàng an'; //Tạ Hoàng An
*/
var fullname = "tạ hoàng an";
// t + ạ hoàng an
fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);

var spacePosition = fullname.indexOf(" ");

var result = "";

while (spacePosition !== -1) {
    var index = spacePosition + 1;

    result += fullname.slice(0, index) + fullname.charAt(index).toUpperCase();

    fullname = fullname.slice(index + 1);

    spacePosition = fullname.indexOf(" ");
}

result = result + fullname; // Nối phần còn lại của fullname

console.log(result);
