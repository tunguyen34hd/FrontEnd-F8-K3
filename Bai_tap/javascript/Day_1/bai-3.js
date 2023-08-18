// Bài 3: Tìm số lớn nhất
var a = 20,
    b = 10,
    c = 5;
console.log(` cho ba số: ${a} ${b} ${c}`);

var max = a; // Giả định giá trị lớn nhất là số đầu tiên

if (max < b) {
    max = b;
}

if (max < c) {
    max = c;
}

console.log(`Số lớn nhất trong 3 số là: ${max}`);

// Kỹ thuật đặt lính canh
