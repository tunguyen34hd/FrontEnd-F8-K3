/*
Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị

Kết quả sẽ hiển thị ra kết định dạng kèm đơn vị tiền tệ

//Case 1
var price = 12000;
console.log(price.getCurrency('đ')) //Hiển thị: 12,000 đ

//Case 2
var price = "12000000";
console.log(price.getCurrency('đ')) //Hiển thị: 12,000,000 đ
*/

var price = 12000000;

Number.prototype.getCurrency = function (currency) {
    var value = +this.valueOf();

    if (currency) {
        return value.toLocaleString() + " " + currency;
    }

    return value;
};

String.prototype.getCurrency = Number.prototype.getCurrency;

console.log(price.getCurrency("đ"));
