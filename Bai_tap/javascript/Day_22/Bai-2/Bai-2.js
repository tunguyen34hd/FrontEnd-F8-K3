// Viết lại vòng lặp reduce() trong Array bằng cách sử dụng Prototype trong Javascript

// Lưu ý: Đặt tên là reduce2()

Array.prototype.reduce2 = function (callback, result) {
     var i = 0;
     if (arguments.length < 2) {
          i = 1;
          result = this[0];
     }
     for (; i < this.length; i++) {
          result = callback(result, this[i], this);
     }
     return result;
};
var numbers = [1, 3, 5, 7, 9];
var result = numbers.reduce2(function (total, number) {
     return total + number;
});
console.log(result);
