/*
   Regex
Các cú pháp viết tắt:
\d --> Đại diện cho số
\D --> Không phải là số
\w --> Đại diện chữ thường, hoa, số, _
\W --> Ngược lại của \w
\s --> Đại diện cho khoảng trắng
\S --> Không phải khoảng trắng
. --> Đại diện cho tất cả

- Phủ định: ^ (Để trong cặp ngoặc [])

- Hoặc: | (Nên bọc vào cặp ngoặc tròn)
*/

const phone = "0388656169";
const pattern = /^(0|\+84)\d{9}$/;
console.log(pattern.test(phone));

// Bài tập: Validate thẻ html (thẻ đầy dủ)
// <tag attribute1="value1" attribute2="value2" attribute3>text</tag>
const tagHtml = `<h1 class="abc" id="abc" data-id="123"></h1>`;
const pattern2 = /^<[a-z0-9-]+.*>.*<\/[a-z0-9-]+>$/;
console.log(pattern2.test(tagHtml));

const str = "hoanganit!@#$%";
const pattern3 = /^[^A-Z]+$/;
console.log(pattern3.test(str));

// Bài tập: Validate URL
const url =
   "https://frontend-nextjs.fullstack.edu.vn:8080/khoa-hoc/front-end-offline?id=1&query=abc#home";
const pattern4 =
   /^(http|https):\/\/[a-z0-9]+[a-z0-9-_.]*\.[a-z]{2,}(:\d{2,}|)(\/*|\/.*)$/;
console.log(pattern4.test(url));
