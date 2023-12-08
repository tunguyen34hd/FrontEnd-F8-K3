// React Render UI --> Thông qua thư viện ReactDOM
import ReactDOM from "react-dom/client"; // CSR
import React from "react";

// Quy trình Render của ReactDOM
// React Element --> Qua thư viện React DOM --> Tạo thành HTMl

// Tạo React Element --> Trả về 1 object
// Có 3 tham số chính là thẻ, prop(properties), rest parameter(thêm nhiều dc)
// const h1 = React.createElement(
//    "h1",
//    null,
//    React.createElement(
//       "a",
//       { href: "https://facebook.com", target: "_blank" },
//       "Học React không khó"
//    )
// );
// const h2 = React.createElement("h2", null, "Học React dễ mà");
// // const arr = [];
// // for (let i = 1; i <= 100; i++) {
// //    arr.push(React.createElement("li", null, "Item" + i));
// // }
// const arr = [...Array(100).keys()].map((index) =>
//    React.createElement("li", null, "item" + (index + 1))
// );
// const ul = React.createElement("ul", null, ...arr);
// const button = React.createElement(
//    "button",
//    {
//       className: "btn",
//       onClick: (e) => {
//          console.log("Hello");
//          console.log(e);
//       },
//    },
//    "Click me"
// );
// const div = React.createElement(
//    "div",
//    {
//       id: "main",
//       className: "main",
//       "data-index": "ahihi",
//       style: { color: "red", fontWeight: "bold", fontSize: "2rem" },
//    },
//    h1,
//    h2,
//    button,
//    ul
// );
// console.log(div);

/*
Bài tập:
- Thêm thẻ ul vào trước thẻ button
- Thêm 100 thẻ li vào thẻ ul
*/

// JSX (Javascript XML) --> React Element (thông qua Babel) --> HTML (Thông qua React DOM)
const title = " Tôi là Alo";
const getName = () => <h2>Tôi là Hoàng An</h2>;
const Product = () => <h2>Khóa học React</h2>; // --> Component (Nếu component tạo bằng function thì gọi là: functional Component)
const div = (
   <div>
      <h1>Học React không khó</h1>
      <h2>Học React dễ hơn</h2>
      <h2>{title}</h2>
      {getName()}
      {/* {Product()} */}
      <Product />
      <div className="content">
         <ul className="menu">
            <li>item 1</li>
            <li>item 2</li>
         </ul>
         <button
            className="btn"
            id="btn"
            onClick={() => console.log(`Hello ${title}`)}
         >
            Click me
         </button>
      </div>
   </div>
);
console.log(div);

// Render React Element
ReactDOM.createRoot(document.querySelector("#root")).render(div);
