// Copy Object
// var a = {
//      name: "Hoang An",
//      email: "hoangan@gmail.com",
// };
// var b = a;

// // Copy Object
// var b = Object.assign({}, a); //shallow copy
// var b = { ...a }; //Spread (ES6) => Shallow copy
// var b = JSON.parse(JSON.stringify(a)); //Deep Copy
// b.name = "Hoang An F8";
// console.log(a);

// Optional Chaining (?.)

// 1. Optional Chaining với thuộc tính
// Thêm dấu ? trước dấu . gọi tên thuộc tính
// Nếu không có thuộc tính => trả về undefined

// var a = undefined;
// console.log(a?.name);

// var a = "abc";
// console.log(`Độ dài của chuỗi là: ${a?.length ?? "Không xác định"}`);

// 2. Optional Chaining với phương thức
var a = {};
console.log(a.getName?.());

/*
apply()
bind()
call()

ES6 Object: Spread, Destructuring, Object Literal Enhancement
*/
