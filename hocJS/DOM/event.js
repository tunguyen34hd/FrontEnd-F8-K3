// Xử lý tăng giảm counter
var counter = document.querySelector(".counter");

var validEvent = new Event("valid");
var invalidEvent = new Event("invalid");
var h1 = counter.children[0];
var decrement = counter.children[1];
var increment = counter.children[2];

decrement.addEventListener("click", function () {
   h1.innerText--;
   if (h1.innerText < 10) {
      counter.dispatchEvent(invalidEvent);
   } else {
      counter.dispatchEvent(validEvent);
   }
});
increment.addEventListener("click", function () {
   h1.innerText++;
   if (h1.innerText >= 10) {
      counter.dispatchEvent(validEvent);
   } else {
      counter.dispatchEvent(invalidEvent);
   }
});
