// Load => Tất cả các tài nguyên được tải xong

// DOMContentLoaded => Khi cây DOM được hoàn thành

// window.addEventListener("load", function () {
//    console.log("Web đã tải xong");
//    var img = document.querySelector("img");
//    console.log(img.width);
// });

// document.addEventListener("DOMContentLoaded", function () {
//    console.log("Hình thành cây DOM");
//    var img = document.querySelector("img");
//    console.log(img.width);
// });

var preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
   Object.assign(preloader.style, {
      opacity: 0,
      visibility: "hidden",
   });
   setTimeout(function () {
      preloader.remove();
   }, 400);
});
