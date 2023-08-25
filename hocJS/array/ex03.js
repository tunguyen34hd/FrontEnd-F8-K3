// 1. some(callback)
/*
- Vòng lặp kiểm tra: trả về true/false
- Trả về true nếu có ít nhất 1 lần lặp của callback trả về true
*/

var numbers = [1, 3, 5, 2, 9];
// Kiểm tra mảng trên có số chẵn hay không ?
var check = numbers.some(function (number) {
    return number % 2 === 0;
});
console.log(check);

// 2. every(callback)
/*
- Vòng lặp kiểm tra: Trả về true/false
- Chỉ trả về true nếu tất cả các lần lặp trả về true
- Trả về false khi không có lần lặp nào trả về true
*/
var numbers = [1, 3, 5, 2, 9];
// Kiểm tra mảng trên có tất cả là số lẻ không?
var check = numbers.every(function (number) {
    return number % 2 !== 0;
});
console.log(check);

// 3. find()
/*
- Cách hoạt động giống filter
- Trả về phần đầu tiên tìm được
*/
var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.find(function (number) {
    return number > 3;
});
console.log(result);

// 4. findLast()
/*
- Cách hoạt động giống filter
- Trả về phần cuối cùng tìm được
*/
var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.findLast(function (number) {
    return number > 3;
});
console.log(result);

// 5. findIndex()
/*
Trả về index đầu tiên tìm được
*/
var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.findIndex(function (number) {
    return number > 3;
});
console.log(result);

// 6. findLastIndex()
/*
Trả về index cuối cùng tìm được
*/
var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.findLastIndex(function (number) {
    return number > 3;
});
console.log(result);

// Bài tập
// var users = [
//     ["Hoàng An", "hoangan.web@gamil.com"],
//     ["Nguyễn Dương", "duong@gamil.com"],
//     ["Anh Quân", "quan@gamil.com"],
// ];
// var email = "duong@gmail.com";
// // Xóa users có email như trên

// // Cách 1:
// var index = users.findIndex(function (email) {
//     return users[1] === email;
// });
// if (index !== -1) {
//     users.splice(index, 1);
// }
// console.log(users);

// Bài tập: Lọc trùng user có cùng email
var users = [
    ["Hoàng An", "hoangan.web@gamil.com"],
    ["Nguyễn Dương", "duong@gamil.com"],
    ["Anh Quân", "quan@gamil.com"],
    ["Nguyễn Dương", "duong@gamil.com"],
];

var newArr = []; // Lưu kết quả mảng không bị trùng
users.forEach(function (user) {
    var index = newArr.findIndex(function (item) {
        return user[1] === item[1];
    });
    if (index === -1) {
        newArr.push(user);
    }
});
console.log(newArr);
// Cách 2:

var newUsers = [];

users.forEach(function (user) {
    var index = newUsers.findIndex(function (newUser) {
        return newUser[1] === user[1];
    });
    if (index === -1) {
        newUsers.push(user);
    }
});

console.log(newUsers);

// Bài Tập:
var users = [
    ["Hoàng An", "hoangan.web@gamil.com", 20],
    ["Nguyễn Dương", "duong@gamil.com", 21],
    ["Anh Quân", "quan@gamil.com", 23],
];
var email = "duong@gamil.com";
// Tăng user nào có email như trên thêm 2 tuổi

// Cách 1: Dùng index
var index = users.findIndex(function (email) {
    return users[1] === email;
});
if (index !== -1) {
    users[index][2] += 2;
}
console.log(users);

// Cách 1.1
var index = users.findIndex(function (email) {
    return users[1] === email;
});
console.log(index);
users[index][2] += 2;
console.log(users);

// Cách 2: Dùng map
var newArr = users.map(function (user) {
    if (user[1] === email) {
        user[2] += 2;
    }
    return user;
});
console.log(newArr);
