var a = 5,
    b = 3,
    c = 1;
console.log(`chưa sắp xếp: ${a}, ${b}, ${c}`);
if (a > b) {
    tem = a;
    a = b;
    b = temp;
}

if (a > c) {
    tem = a;
    a = c;
    c = temp;
}

if (b > c) {
    temp = b;
    b = c;
    c = temp;
}

console.log(`sau sắp xếp: ${a}, ${b}, ${c}`);
