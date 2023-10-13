var timer = document.querySelector(".timer");
var counter = timer.querySelector(".counter");
var btn = timer.querySelector(".action .btn");

var time = 500;

function updateCountdown() {
   counter.innerText = Math.ceil(time / 100);

   if (time <= 0) {
      btn.disabled = false;
   } else {
      requestAnimationFrame(updateCountdown);
   }
   time--;
}

btn.addEventListener("click", function () {
   window.location.href =
      "https://media.printables.com/media/prints/310405/images/2696816_e91a5c47-f516-4f04-9c50-4bac5f94c7fe/thumbs/inside/1280x960/jpg/cover2.webp";
});

updateCountdown();
