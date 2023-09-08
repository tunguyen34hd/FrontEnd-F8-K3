// Viết lại hàm push() trong Array. Đặt tên là push2()
Array.prototype.push2 = function (...items) {
    for (var i = 0; i < items.length; i++) {
        this[this.length] = items[i];
    }
    return this.length;
};

var myArray = [1, 3, 5];
myArray.push2(7, 9);

console.log(myArray);
