// Web Components => Chia trang web thành các thành phần khác nhau -> Dễ bảo trì, nâng cấp, tái sử dụng

// Khi làm việc với Component => Quan tâm tới vòng đời Component => Lifecycle Callback

// var HelloWorld = function () {
//    // Kế thừa từ HTMLElement
//    return Reflect.construct(HTMLElement, [], HelloWorld);
// };

// // Tạo Prototype cho HelloWorld từ Prototype của HTMLElement
// HelloWorld.prototype = Object.create(HTMLElement.prototype);

// // console.log([HTMLElement]);
// HelloWorld.prototype.connectedCallback = function () {
//    // Nội dung component
//    console.log(this);
//    this.innerText = `Hello F8`;
// };

// customElements.define("hello-world", HelloWorld);

Component.creat("hello-world", function () {
   var div = document.createElement("div");
   div.classList.add("box");
   var h2 = document.createElement("h2");
   h2.innerText = "Xin chao F8";
   div.append(h2);
   this.append(div);

   // Internal CSS
   var boderColor = this.getAttribute("border-color");
   var style = document.createElement("style");
   style.textContent = `
   .box {
      border: 1px solid ${boderColor ?? "#000"};
      padding: 15px;
      border-radius: 15px;
   }
   `;
   this.prepend(style);
   // this.innerText = "Hello World";
});
