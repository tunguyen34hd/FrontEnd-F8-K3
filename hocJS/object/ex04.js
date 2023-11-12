// Prototype
/*
1. Prototype với thuộc tính
Object.prototype.tenthuoctinh = giatri

2. Prototype với phương thức
Object.prototype.tenphuongthuc = function(){

}

    Lưu ý: prototype sẽ ảnh hưởng tới tất cả kiểu dữ liệu (trừ null, undefined), nếu gán vào hàm tạo Object
*/
Object.prototype.getFirst = function () {
   var keys = Object.keys(this);
   var firstKey = keys[0];
   return this[firstKey];
};
var user = {
   name: "Hoang An",
   email: "hoangan@gmail.com",
};

Object.prototype.message = "F8";

var customer = {
   email: "contact@fullstack.com",
   age: 31,
};
// Yêu cầu: Mỗi object => Viết 1 phương thức để lấy ra giá trị của thuộc tính đầu tiên

// console.log(user.getFirst());
// console.log(customer.getFirst());

// var fullname = "Hoang An";
// var age = 31;
// var users = [];
// var c = true;
// var today = new Date();
// var a = null; // ko truy cập đc
// var b = undefined; // ko truy cập đc
// console.log(fullname.message);
// console.log(age.message);
// // console.log(a.message);
// // console.log(b.message);
// console.log(today.message);
// console.log(String.prototype);

// String.prototype.geLast = function () {
//     return "Hoang An F8";
// };

// console.log(String.prototype);

// var fullname = "Hoang An";
// console.log(fullname.geLast());

// Bài tập: Viết phương thức prototype có tên getLast trong hàm tạo String
// => Yêu cầuL Trả về từ cuối cùng

// String.prototype.getLast = function () {
//     return this.split(" ").slice(-1).join();
//     return this.slice(this.lastIndexOf(" "));

// };
// var fullname = "Hoang An";
// console.log(fullname.getLast()); //An

// Bài tập2: Viết lại vòng lập map (Đặt tên là map2)
/*
- Không được dùng cấc phương thức có sẵn: forEach, map, push
- Chỉ được dùng: các vòng lặp cơ sở, câu lệnh rẽ nhánh,...
*/
Array.prototype.map2 = function (callback) {
   if (typeof callback !== "function") {
      return;
   }
   var newArr = [];
   if (this.length) {
      for (var i = 0; i < this.length; i++) {
         var value = this[i];
         var result = callback(value, i);
         newArr[newArr.length] = result;
      }
   }
   return newArr;
};

var users = ["An", "Tuấn", "Sơn"];
var newArr = users.map2(function (user, index) {
   return `${index} - ${user}`;
});
console.log(newArr);
