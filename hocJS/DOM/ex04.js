var img = document.querySelector("img");

// Lấy giá trị từng thuộc tính
// Cú pháp: element.tenthuoctinh

// console.log(img.src);
// console.log(img.alt);
// console.log(img.title);
// console.log(img.width);
// console.log(img.height);
// console.log(img.href);

// window.addEventListener("load", function () {
//    console.log(img.width);
//    console.log(img.height);
// });

// Thay đổi giá trị thuộc tính
img.src = "https://picsum.photos/id/870/200/300?grayscale&blur=2";
img.width = 100;
img.height = 100;
img.style = `border-radius: 50%;`;

// Xóa thuộc tính
img.removeAttribute("alt");

console.log(img.className); // Lấy giá trị của thuộc tính class

/*
Khi làm việc với js => Nhiều tình huống cần phải tạo ra những thuộc tính riêng ( không có sẵn trong thẻ html)
-> Đồng nghĩa: không được w3c cho phép

   W3C cho phép tạo ra các thuộc tính bắt đầu bằng tiền tố data-
   -> Data Attribute

Quy tắc đặt tên của Data Attribute
data-word1-word2

Ví dụ: data-count, data-index-number, data-animation-duration,...
*/
var title = document.querySelector(".title");
console.log(title.getAttribute("data-count"));
console.log(title.getAttribute("class"));

console.log(title.dataset);
console.log(title.dataset.count); //data-count
console.log(title.dataset.indexNumber); //data-index-number

title.setAttribute("data-count", 10); // Thay đổi giá trị
title.dataset.indexNumber = "ahihi";
title.dataset.animationDuration = "1s";

delete title.dataset.animationDuration; // xóa thuộc tính animationDuration

delete title.id; //trường hợp không xóa đc
delete title.dataset.count; // xóa đc

title.removeAttribute("data-index-number");

//    Làm việc với class
// console.log(title.className);
console.log(title.classList);

// 1. Thêm class mới
title.classList.add("title-2", "title-3");

// 2. Xóa class
title.classList.remove("sub-title", "title-3");

// 3. Kiểm tra class tồn tại
console.log(title.classList.contains("title-2"));

// 4. toggle class
title.classList.toggle("show");
title.classList.toggle("show");

// Xoá element: tenelement.remove()
title.remove();
