// Sắp xếp 3 số

var a = 5,
    b = 3,
    c = 1;

var temp; // Biến chung gian
console.log(`chưa sắp xếp: ${a}, ${b}, ${c}`);
if (a > b) {
    temp = a;
    a = b;
    b = temp;
}
if (a > c) {
    temp = a;
    a = c;
    c = temp;
}
if (b > c) {
    temp = b;
    b = c;
    c = temp;
}

console.log(`sau sắp xếp: ${a}, ${b}, ${c}`);
