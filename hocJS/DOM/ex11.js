// DOM Nodes
/*
- Element
- Comment
- Text
- Attribute

Để làm việc với DOM Nodes -> Cần phải có 1 html trên trang web để chứa nó
 */

// Cách Cũ
// var root = document.querySelector("#root");
// root.innerHTML = `
// <h1>F8 - Hoc lap trinh</h1>
// <button>Click me</button>
// `;
// var btn = root.querySelector("button");
// btn.addEventListener("click", function () {
//    console.log("Hello Clicked");
// });

// Cách Mới
// Tạo Element
var root = document.querySelector("#root");
var h1 = document.createElement("h1");
h1.innerText = `Hoc lap trinh de di lam`;
h1.id = "Title";

var button = document.createElement("button");
button.innerText = "Click me";

// Show Node lên UI
root.append(h1); // Thêm xuống dưới
root.prepend(button); // Thêm lên trên

/*
BT: Tạo cặp thẻ ul li như sau
<ul class = "menu" datatype="navigation">
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
   <li>Item 4</li>
   <li>Item 5</li>
</ul>

Sau đó show lên UI (id=root và nằm dưới cùng)
*/
var ul = document.createElement("ul");
ul.classList.add("menu");
ul.dataset.type = "navigation";
for (var i = 1; i <= 5; i++) {
   var li = document.createElement("li");
   li.innerText = `Item ${i}`;
   ul.append(li);
}

root.append(ul);

var plusBtn = document.createElement("button");
plusBtn.innerText = `+`;
root.append(plusBtn);

// Yêu cầu: Click vào nút plus -> Thêm item mới của ul li

plusBtn.addEventListener("click", function () {
   var li = document.createElement("li");
   li.innerText = `Item ${i++}`;
   ul.append(li);
});

// Thêm 1 phần Node vào trước 1 Node con khác
var h2 = document.createElement("h2");
h2.innerText = `Hoc JS Khong Kho`;
root.insertBefore(h2, h1);

// Thay thế 1 node con bằng 1 node khác
var h3 = document.createElement("h3");
h3.innerText = `Hoc lap trinh de co luong ngan $$$`;
root.replaceChild(h3, h1);
root.append(h1);

// Xóa 1 node con
root.removeChild(button);
