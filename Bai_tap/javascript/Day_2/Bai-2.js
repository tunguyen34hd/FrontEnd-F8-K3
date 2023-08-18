/*
2. Tính tiền điện
- Viết chương trình tính tiền điện hàng tháng theo yêu cầu sau:
    + Input: Số điện tiêu thụ hành tháng
    + Output: Hiển thị số tính phải đóng
*/
var kwh = 200;

var level1 = 1678;
var level2 = 1734;
var level3 = 2014;
var level4 = 2536;
var level5 = 2834;
var level6 = 2927;

var cost;

if (kwh < 0) {
    console.log("Vui lòng nhập số kwh lớn hơn 0");
} else if (kwh <= 50) {
    cost = kwh * level1; // Giá bậc 1
} else if (kwh <= 100) {
    cost = 50 * level1 + (kwh - 50) * level2; // Giá bậc 2
} else if (kwh <= 200) {
    cost = 50 * level1 + (100 - 50) * level2 + (kwh - 100) * level3; // Giá bậc 3
} else if (kwh <= 300) {
    cost =
        50 * level1 +
        (100 - 50) * level2 +
        (200 - 100) * level3 +
        (kwh - 200) * level4; // Giá bậc 4
} else if (kwh <= 400) {
    cost =
        50 * level1 +
        (100 - 50) * level2 +
        (200 - 100) * level3 +
        (300 - 200) * level4 +
        (kwh - 300) * level5; //giá bậc 5
} else {
    cost =
        50 * level1 +
        (100 - 50) * level2 +
        (200 - 100) * level3 +
        (300 - 200) * level4 +
        (400 - 300) * level5 +
        (kwh - 400) * level6; // Giá bậc 6
}

console.log(`Số tiền phải trả cho ${kwh}kwh là ${cost}vnđ`);
