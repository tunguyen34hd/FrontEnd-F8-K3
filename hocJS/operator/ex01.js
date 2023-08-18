/*
Toán tử và biểu thức
- Biểu thức = Toán tử + Toán hạng

S = a + b * c

1. Toán tử số học

+, -, *, /, %, **
++, --


*/
// var a= "10.5"; // Chuỗi số
// var b = 20;
// var c = a + b;
// var c = parseInt(a) + parseInt(b);
// Ép kiểu số nguyên

// var c = +a + +b; //Ép về kiểu số
// console.log(c);

// var count = 0;
// count++; //count = count + 1
// ++count; //count = count + 1
// count--; //count = count -1
// --count; //count = count -1
// console.log(count);

// var total = count++; //Lấy trước khi tăng
// console.log(total);
// console.log(total);

// var total = ++count; //Lấy sau khi tăng
// console.log(total);
// console.log(total);

// var total = count++ + ++count; //1 + 3
// console.log(count); //4

// count++;
// console.log(++count);

/*
2. Toán tử logic (so sánh)
=> Toán này sẽ trả về kiểu dữ liệu boolean(true, false)
>, <, >=, <=, ==, ===, !=, !==
*/

// var a = 10;
// var b = a === 10; //true, false
// var b = a === '10'; //so sánh cả giá trị và kiểu dữ liệu
// console.log(b);

/*
3. Toán tử kết hợp
&& => and
|| => or
! => not
*/

// var a = 10;
// var b = a >= 5 && a <= 10; //Kết quả chỉ đúng khi tất cả vế đều đúng, sai khi 1 vế sai
// var b = a < 0 || a >= 10; //Kết quả đúng chỉ đúng khi 1 vế đúng, sai khi tất cả vế sai
// b = !b;
// console.log(b);

/*
4. Toán tử gán (=)
*/
// var a = 10;
// // a = a + 10;
// a += 10; // a = a + 10;
// a *= 10;
// a /= 10;
// a -= 10;
// a %= 10;
// a **= 10;
// console.log(a);

/*
5. Toán tử 3 ngôi
*/

// var a = 10;
// // dieukien ? giatridung : giatrisai
// var b = a >= 10 ? "F8" : "Hoang An";
// console.log(b);

// var x = 10;
// var total = 1 + 2 + (x >= 10 ? 10 : 5) + 3 + 4;
// console.log(total);

/*
6. Toán tử nullish (??)
- Check undefinded và null
- Trả về a nếu a khác null và undefined, trả về vế trái nếu a là null và undefined
*/

// var a; //undefined
// var a = null;
// var b = a ?? "F8";
// console.log(b);

// // Bt: Viết lại toán tử nullish bằng toán tử 3 ngôi

// // var b = a === null || a === undefined ? "F8" : a;
// var b = a !== null && a !== undefined ? a : "F8";
// console.log(b);

/*
Truthy, Falsy
=> Tự động chuyển về kiểu boolean trong ngữ cảnh thích hợp cần sử dụng boolean

- Chuyển về false => falsy
0, "", null, undefined, false, NaN

- Việc chuyển kiểu dữ liệu khác về true => Truethy
- Các trường hợp còn lại
*/

// var a = 10;
// // var b = a ? "F8" : "Hoang An";
// //=> Kiểm tra đúng

// // var b = !a ? "F8" : "Hoang An";
// // Kiểm tra sai

// console.log(b);

/*
7. Toán tử && => Áp dụng với Truethy, Falsy
=> Nếu trước && là true => lấy sau &&
=>> Ngược lại, lấy trước &&
*/

// var a = 10;
// var b = a && "F8";
// console.log(b);

/*
8. Toán tử || => Áp dụng với Truethy, Falsy
=> Nếu trước || là falsy => lấy sau ||
=> Ngược lại thì lấy trước ||
*/
var a = 10;
var b = a || "F8";
console.log(b);
