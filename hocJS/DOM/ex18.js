/*
Các bước để xây dựng 1 event

1. Xác định được logic của Event

-> Slider được 100% thì tạo ra 1 event

2. Tên event là gì?

-> Tên event: finish

3. Element sẽ lắng nghe event

-> Element: slider

4. Tạo ra 1 object event từ hàm event hoặc Custom Event

5. Dispatch Event dựa vào Object event và element đã xác định

6. Test (Gọi hàm addEventListener)
*/

var slider = document.querySelector(".slider");
var finishEvent = new Event("finish");

slider.addEventListener("input", function () {
   var value = this.value;
   if (+value === 100) {
      this.dispatchEvent(finishEvent);
      finishEvent.abc = "xyz";
   }
});

slider.addEventListener("finish", function (e) {
   console.log(e);
   console.log("Cong Viec Hoan Thanh");
});

// var handleFinish = function () {
//    console.log("Cong viec Hoan Thanh");
// };
