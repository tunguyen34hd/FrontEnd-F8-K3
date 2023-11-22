// Regex: Các ký hiệu để xử lý chuỗi nâng cao
/*
1. So khớp
2. Cắt chuỗi
3. Thay thế

Pattern --> Object

const pattern = /regex/modifier

Chuỗi

Hàm xử lý

Website test regex: https://regex101.com/

Các ký hiệu cơ bản

- string --> Khớp chuỗi string
- ^ --> Khớp biểu thức đầu chuỗi
- $ --> Khớp cuối chuỗi
- [A-Z] --> Khớp chữ hoa
- [a-z] --> Khớp chữ thường
- [0-9] --> Khớp số
- [charlist] --> Khớp các ký tự

--> Lưu ý: 
      -->Các biểu thức viết trong 1 cặp ngoặc vuông --> Kết hợp theo điều kiện hoặc
      --> Các biểu thức sẽ có độ dài cố định là 1

Các ký hiệu độ dài (Đặt sau từng biểu thức):
- {value} --> Độ dài cố định = value
- {min,} --> Độ dài >= min
- {min,max} --> Độ dài từ min đến max

Các ký hiệu viết tắt cho độ dài:
+ --> {1,}
- --> {0,}
? --> {0,1}

Khi gặp các ký hiệu của Regex mà vẫn muốn khớp --> Thêm ký hiệu \ (escape) phía trước
[ ] . /
*/

// const pattern = /[cde]/;
// console.log(typeof pattern);
// const str = "hello";
// console.log(pattern.test(str));

// Bài tập: Kiểm tra 1 biến hợp lệ
// const parttern = /^[a-zA-Z_$][a-zA-Z0-9_$]{0,}*$/;
// const str = "_abc";
// console.log(parttern.test(str));

// const url = "https://fullstack.edu.vn";
// const parttern = /^https:\/\/[a-z0-9.-_]+\.[a-z]{2,}$/;
// console.log(parttern.test(url));

// Bài tập: Khớp địa chỉ email
const parttern = /^[a-z0-9-_.]+@[a-z0-9-_.]+\.[a-z]{2,}$/;
const email = "abc.web@gmail.edu.com";
console.log(parttern.test(email));
