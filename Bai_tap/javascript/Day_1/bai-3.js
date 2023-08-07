var a = 20,
    b = 10,
    c = 5;
console.log(` cho ba số: ${a} ${b} ${c}`);
if (a > b && a > c) {
    console.log(`Giá trị lớn nhất trong 3 số là: ${a}`);
} else if (b > a && b > c) {
    console.log(`Giá trị lớn nhất trong 3 số là: ${b}`);
} else {
    console.log(`Giá trị lớn nhất trong 3 số là: ${c}`);
}
