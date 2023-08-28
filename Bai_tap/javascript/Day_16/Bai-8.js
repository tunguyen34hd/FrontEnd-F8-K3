/*
8. Tính giá trị biểu thức không dùng vòng lập
- Tính giá trị biểu thức: S = 1 + 1/2 + 1/3 + 1/4 + 1/5 + ... + 1/N
*/
// C1:
var n = 3;
var s = 0;
for (var i = 1; i <= n; i++) {
    s += 1 / i;
}
console.log(s);

// C2:
var getTotal = function (n) {
    if (n === 1) {
        return 1;
    }
    return 1 / n + getTotal(n - 1);
};

// var n = 3;
console.log(getTotal(n));
