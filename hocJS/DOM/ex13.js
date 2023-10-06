var content = document.querySelector(".content");
console.log(content);

// 1. Children -> Chỉ chọn element
// console.log(content.children);

// 2. childNodes -> Trả về tất cả các node con
// console.log(content.childNodes);

// 3. firstChild -> Trả về Node con đầu tiên
// console.log(content.firstChild);

// 4. firstElementChild -> Trả về Element đầu tiên
// console.log(content.firstElementChild);

// 5. lastChild -> Trả về node con cuối cùng
// console.log(content.lastChild);

// 6. lastElementChild -> Trả về element con cuối cùng
// console.log(content.lastElementChild);

// 7. NextElementSibling -> chọn đến element kế tiếp

// 8. NextSibling -> Chọn tới Node kế tiếp

// 9. previousElementSibling -> Chọn element phía trước
// console.log(h2.previousElementSibling);

// 10. previousSibling -> Chọn Node phía trước
// console.log(h2.previousSibling);

// var h1 = content.firstElementChild;
// console.log(h1.nextSibling);

var h1 = content.lastElementChild;
console.log(h1.nextSibling);
