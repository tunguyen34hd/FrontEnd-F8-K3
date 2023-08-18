/*
1. Tính tiền taxi
- Tính tiền cước taxi dựa vào các điều kiện sau:
    + số km <=1 giá 1500đ
    + 1 < số km <= 5 giá 13500đ
    + Số km > 5 giá 11000đ
    + Nếu số km > 120km sẽ được giảm 10% tổnh số tiền
*/
var km = 150;
var price1 = 15000;
var price2 = 13500;
var price3 = 11000;
var discount = 10;

var cost;

if (km <= 1) {
    cost = km * price1; // Giá ngưỡng 1
} else {
    if (km <= 5) {
        cost = 1 * price1 + (km - 1) * price2; // Giá ngưỡng 2
    } else {
        cost = 1 * price1 + (5 - 1) * price2 + (km - 5) * price3; // Giá ngưỡng 3

        if (km > 120) {
            cost = (cost * (100 - 10)) / 100;
        }
    }
}

console.log(cost);
