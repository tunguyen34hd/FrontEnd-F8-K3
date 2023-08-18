/**
- Function declaration

- Function expression
var tenHam = function() {

}

*/

// var getMessage = function () {
//     console.log(`Xin chao f8`);
// };

// getMessage();

// IIFE
// (function (name) {
//     console.log("Xin chao F8", name);
// })("Hoang An");

// var a = function (name) {
//     console.log(name);
// };

// var b = a;
// b("F8");

// var a = function () {
//     console.log("Xin chao F8");
// };

// if (typeof a === "function") {
//     a();
// }

// var sum = function (a, b) {
//     console.log(arguments);
//     console.log(a, b);
// };
// sum(5, 10, 15, 20);

// rest parameter
// var concat = function (str, ...args) {
//     console.log(str);
//     console.log(args);
//     // console.log(arguments);
//     /*
//     Tách dữ liệu thành 2 phần
//     - Phân 1: Đối số 1
//     - Phần 2: Các đối số còn lại
//     */
// };
// concat("Hoang An", "F8", "F9", "F10");

// Hàm setTimeout
// Delay 1 function
/*
- Tham số 1: 1 hàm
- Tham số 2: Thời gian muốn delay
- Tham số 3: rest param
*/

// var handleshow = function (name, email) {
//     console.log("Xin chào 8", name);
//     console.log(email);
// };
// setTimeout(handleshow, 2000, "Hoang An", "@gmail.com");
// Gọi hàm theo kiểu Callback

// setTimeout(function () {
//     console.log("Xin chao F8");
// }, 2000);

// setInterval => Lặp đi lặp lại nội dung trong function

// var count = 0;
// var id = setInterval(function () {
//     console.log("Xin Chao", ++count);
//     if (count === 10) {
//         clearInterval(id);
//     }
// }, 1000);

// Định nghĩa hàm Callback
// var getA = function (fn, ...args) {
//     setTimeout(function () {
//         console.log("getA");
//         if (typeof fn === "function") {
//             fn(...args); //Lời gọi hàm chủ động
//         }
//     }, 1000);
// };

// var getB = function (name, email) {
//     console.log(`getB`, name, email);
// };

// var getC = function () {
//     console.log(`getC`);
// };

// getA(getB, "Hoang An", "Hoangan.web@gmail.com");

/*
Định nghĩa 3 hàm:
one() => Mất 3s để hiện kết quả : Thứ nhất
two() => Mất 1s để hiện kết quả : Thứ hai
three() => mất 2s để hiện kết quả : Thứ ba
*/

// Thực hiện gọi hàm là sao để chạy theo thứ tự: one() => two() => three()

var one = function (fn) {
    setTimeout(function () {
        console.log("Thứ nhất");
        if (typeof fn === "function") {
            fn();
        }
    }, 3000);
};

var two = function (fn) {
    setTimeout(function () {
        console.log("Thứ hai");
        if (typeof fn === "function") {
            fn();
        }
    }, 1000);
};

var three = function (fn) {
    setTimeout(function () {
        console.log("Thứ ba");
        if (typeof fn === "function") {
            fn();
        }
    }, 2000);
};

var four = function () {
    console.log("Hoàng An");
};

one(function () {
    two(function () {
        three(four);
    });
});
