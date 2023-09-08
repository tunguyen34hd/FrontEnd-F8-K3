// Viết làm vòng lặp filter trong Array. Đặt tên là filter2()
var numbers = [1, 3, 5, 7, 9];

Array.prototype.filter2 = function (callback) {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArr[newArr.length] = this[i];
        }
    }
    return newArr;
};

var result = numbers.filter2(function (number) {
    return number % 2 === 0;
});

console.log(result);
