// Lấy kết quả giao giữa 2 mảng

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var result = arrA.filter(function (value) {
    if (arrB.includes(value)) {
        return true;
    }
});

console.log(result);
