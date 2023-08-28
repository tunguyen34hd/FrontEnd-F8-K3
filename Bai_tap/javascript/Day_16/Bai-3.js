/*
3. Tính giá trị biểu thức

Chho trước số nguyên n. Tính giá trị biểu thức sau
S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)
*/
var n = 2;
var s = 0;
for (var i = 1; i <= n; i++) {
    console.log(`${i} * ${i + 1}`);
    s += i * (i + 1);
}
console.log(s);
