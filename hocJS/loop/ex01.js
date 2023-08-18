// Vòng lặp: đoạn chương trình lặp đi lặp lại theo 1 số lần nhất định

/*
2 loại:
- Lặp với số lần lặp xác định trước: for
for (bienchay; dieukiendung; buoc nhay) {
    Noi dung
}

- Lặp với số lần lặp không xác địng trước: while, do while
*/

// for (var i = 1; i <= 10; i++) {
//     console.log(`Lằn lặp thứ ${i}`);
// }

// for (var i = 10; i >= 1; i--) {
//     console.log(`Lần lặp thứ ${i}`);
// }

// for (var i = 1; i <= 10; i++) {
//     for (var j = 1; j <= 10; j++) {
//         console.log(`i = ${i} - j = ${j}`);
//     }
// }

// Bài 1: Tính giá trị biểu thức sau
// Total = 1 + 2 + 3 + ... + n

// var n = 10;
// var total = 0;
// for (var i = 1; i <= n; i++) {
//     // console.log(i);
//     // Mỗi lần lặp => Cộng vào biến total
//     //Kêt quả sau cùng là giá trị của biểu thứcc
//     total += i;
// }

// console.log(`Total = ${total}`);

// Bài 2: Tính trung bình cộng các số chẵn trong khoảng từ 1 đến N

var n = 4;
var avg,
    total = 0,
    count = 0;
for (var i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        total += i;
        count++;
    }
}

avg = total / count;
console.log(`Trung bình cộng = ${avg}`);
