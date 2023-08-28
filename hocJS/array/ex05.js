// Tham chiếu

// var a = ["Hoàng An", "hoangan.web@gamil.com"];

// var b = a;

// Thao tác với array b => array a sẽ thay đổi

// Copy array sang địa chỉ mới , với từng cách:

// 1.
// var b = a.slice(0); // shallow copy

// 2.
// var b = a.map(function (value) {
//     return value;
// });

// 3.
// var b = JSON.parse(JSON.stringify(a)); // Deep Copy

// Giải thích: Chuyển array => json => array

// b[0] = "Hoàng An f8";

// console.log(a);
// console.log(b);

// Array-Like Object

// Array.from(arr) => Chuyển Array-Like object thành array
function myFunction() {
    // arguments => Array-Like Object
    console.log(arguments);
    console.log(Array.from(arguments));
    Array.from(arguments).forEach(function (a) {
        console.log(a);
    });
}

myFunction(5, 10, 15, 20);

/*
Một số tình huống trả về Array-like object:
- arguments
- HTMLCollection
*/
// var a = [];
// a[a.length] = 1;
// a["name"] = "An";
