var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel-inner");
var nextBtn = document.querySelector(".carousel-nav .next");
var prevBtn = document.querySelector(".carousel-nav .prev");

var carouselItems = carouselInner.children;

var itemWidth = carousel.clientWidth;
console.log(itemWidth);

var totalWidth = itemWidth * carouselItems.length;
console.log(totalWidth);

carouselInner.style.width = `${totalWidth}px`;
carouselInner.style.transition = "transform 0.4s ease";

var position = 0;
var currentSlide = 0;

nextBtn.addEventListener("click", function () {
   if (currentSlide >= carouselItems.length - 1) {
      return;
   }
   currentSlide++;
   position = -currentSlide * itemWidth;
   carouselInner.style.transform = `translateX(${position}px)`;

   loadDots();
});

prevBtn.addEventListener("click", function () {
   if (currentSlide <= 0) {
      return;
   }
   currentSlide--;
   position = -currentSlide * itemWidth;
   carouselInner.style.transform = `translateX(${position}px)`;

   loadDots();
});

var dotsContainer = document.querySelector(".carousel-dots");

for (var i = 0; i < carouselItems.length; i++) {
   var dot = document.createElement("span");
   dot.classList.add("dot");
   dot.setAttribute("data-slide-index", i);
   dotsContainer.appendChild(dot);
}

var dots = document.querySelectorAll(".dot");

dots.forEach(function (dot) {
   dot.addEventListener("click", function () {
      var slideIndex = parseInt(dot.getAttribute("data-slide-index"));
      currentSlide = slideIndex;
      position = -currentSlide * itemWidth;
      carouselInner.style.transform = `translateX(${position}px)`;

      loadDots();
   });
});

function loadDots() {
   dots.forEach(function (dot, index) {
      if (index === currentSlide) {
         dot.classList.add("active");
      } else {
         dot.classList.remove("active");
      }
   });
}
var isDragging = false;
var startPosition = 0;
var currentTranslate = 0;
var mouseX = 0;

carouselInner.addEventListener("mousedown", function (e) {
   isDragging = true;
   startPosition = e.pageX - carousel.offsetLeft;
   currentTranslate = position;

   carouselInner.style.transition = "none";
   document.body.style.cursor = "grabbing";
});

carouselInner.addEventListener("mousemove", function (e) {
   if (!isDragging) return;

   mouseX = e.pageX - carousel.offsetLeft;
   var offsetX = mouseX - startPosition;
   position = currentTranslate + offsetX;
   carouselInner.style.transform = `translateX(${position}px)`;
});

carouselInner.addEventListener("mouseup", function () {
   isDragging = false;

   carouselInner.style.transition = "transform 0.4s ease";
   document.body.style.cursor = "grab";
});

carouselInner.addEventListener("mouseleave", function () {
   isDragging = false;

   carouselInner.style.transition = "transform 0.4s ease";
   document.body.style.cursor = "grab";
});

carouselInner.addEventListener("dragstart", function (e) {
   e.preventDefault();
});

carouselInner.addEventListener("mouseup", function () {
   var slideIndex = Math.round(-position / itemWidth);
   if (slideIndex < 0) slideIndex = 0;
   if (slideIndex >= carouselItems.length)
      slideIndex = carouselItems.length - 1;

   position = -slideIndex * itemWidth;
   currentSlide = slideIndex;

   carouselInner.style.transform = `translateX(${position}px)`;

   loadDots();
});
