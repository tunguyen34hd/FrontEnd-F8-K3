// Lấy kết quả giao giữa 2 mảng
// Kết quả: [1,2]

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 3, 6, 7, 1];

var result = arrA.filter(function (value) {
    return arrB.includes(value);
});

console.log(`giao của hai mảng là:  ${result}`);
