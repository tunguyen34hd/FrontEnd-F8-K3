/*
- Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter

- Yêu cầu chi tiết:
    + Hàm return về giá trị
    + Ép ràng buộc kiểu dữ liệu là số
    + Nếu dữ liệu truyền vào không hợp lệ, trả về thông báo lỗi
*/

function Sum(...numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var num = Number(numbers[i]);

        if (isNaN(num)) {
            return "Dữ liệu nhập vào không hợp lệ";
        }

        sum += num;
    }
    return sum;
}

console.log(Sum(1, 3));
console.log(Sum(1, "a"));
