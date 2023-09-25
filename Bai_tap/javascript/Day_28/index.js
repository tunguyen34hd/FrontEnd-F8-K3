var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

// Giá trị khởi tạo
var initialClientX;
var percent;
var currentPercent = 0;

progressBar.addEventListener("mousedown", function (e) {
   // Lấy offsetX của progress-bar
   var offsetX = e.offsetX;

   // Tính giá trị % giữa offsetX và chiều rộng của progress bar
   percent = (offsetX * 100) / progressBar.clientWidth;

   // Làm tròn 2 chữ số phần thập phân
   percent = percent.toFixed(2);

   progress.style.width = `${percent}%`;

   // Kích hoạt hành động bấm chuột và kéo
   initialClientX = e.clientX;
   currentPercent = percent;
   document.addEventListener("mousemove", handleDrag);
   console.log(e.offsetX);
});

progressSpan.addEventListener("mousedown", function (e) {
   console.log(e.offsetX);
   e.stopPropagation();
   document.addEventListener("mousemove", handleDrag);

   // Cập nhật clientX khi bấm chuột vào button màu tím
   initialClientX = e.clientX;
});

// Hủy sự kiện mousemove nếu mouseup vào document
document.addEventListener("mouseup", function () {
   document.removeEventListener("mousemove", handleDrag);

   // Lấy % cuối cùng và cập nhật vào biến currentPercent
   currentPercent = percent;
});

// Kéo thả thay đổi vị trí
var handleDrag = function (e) {
   console.log("kéo");
   // Lấy giá trị clientX mới nhất tại vị trí chuột
   console.log(e.clientX);

   // Khoảng cách kéo = clientX mới nhất - clientX ban đầu
   var moveWidth = e.clientX - initialClientX;

   // Tính phần trăm giữa khoảng cách kéo và chiều rộng của progressbar
   percent = (moveWidth * 100) / progressBar.clientWidth;

   percent = +percent.toFixed(2) + +currentPercent;

   // Cập nhật width cho progress
   if (percent < 0) {
      percent = 0;
   }

   if (percent > 100) {
      percent = 100;
   }
   progress.style.width = `${percent}%`;
};

// Xây dựng trình phát nhạc
var audio = document.querySelector(".audio");
var playBtn = document.querySelector(".play-btn");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;

// Viết hàm chuyển đổi từ giây -> Định dạng phút:giây
var getTime = function (seconds) {
   // Tính ra số giây
   // Lấy số giây / 60 -> Làm tròn xuống (Math.floor())
   var mins = Math.floor(seconds / 60);

   // Tính số giây còn lại sau khi đã trừ cho số phút
   seconds = Math.floor(seconds - mins * 60);
   return `${mins < 10 ? "0" + mins : mins}:${
      seconds < 10 ? "0" + seconds : seconds
   }`;
};

// Lấy thời lượng của audio
audio.addEventListener("loadeddata", function () {
   console.log(getTime(audio.duration));
   durationEl.innerText = getTime(audio.duration);
});
console.log(playBtn);
// Phát và dừng nhạc khi bấm nút play
playBtn.addEventListener("click", function () {
   // audio.pause -> Lấy trạng thái audio
   if (audio.paused) {
      audio.play(); // Phát nhạc
   } else {
      audio.pause();
   }
   console.log("ok");
});

// Lắng nghe event play
audio.addEventListener("play", function () {
   playBtn.children[0].classList.remove("fa-play");
   playBtn.children[0].classList.add("fa-pause");
});

// Lắng nghe event pause
audio.addEventListener("pause", function () {
   playBtn.children[0].classList.remove("fa-pause");
   playBtn.children[0].classList.add("fa-play");
});

// Lắng nghe sự kiện timeupdate
audio.addEventListener("timeupdate", function () {
   // Lấy thời gian hiện tại của bài hát
   var currentTime = audio.currentTime;
   console.log(currentTime);

   // Show currenttime lên UI
   currentTimeEl.innerText = getTime(currentTime);

   // Chuyển currentTime thành phần trăm
   var percent = (currentTime * 100) / audio.duration;

   // Cập nhật width vào progress
   progress.style.width = `${percent}%`;
});
audio.addEventListener("timeupdate", function () {
   if (!isDragging) {
      var progress = (audio.currentTime / audio.duration) * 100;
      progressBar.value = progress;
   }
});

progressBar.addEventListener("mousedown", function (e) {
   isDragging = false;
   audio.play();
   initialClientX = e.clientX;
});

progressBar.addEventListener("mouseup", function (e) {
   var clickPosition =
      (e.clientX - progressBar.getBoundingClientRect().left) /
      progressBar.clientWidth;
   var newTime = clickPosition * audio.duration;

   audio.currentTime = newTime;

   if (isPlaying) {
      audio.play();
   }

   isDragging = false;
});

var timeTooltips = document.querySelector(".tooltips-time");

var tooltipsTime = function (e) {
   var position = e.clientX - progressBar.offsetLeft;
   var hoverPosition =
      (e.clientX - progressBar.getBoundingClientRect().left) /
      progressBar.clientWidth;
   var previewTime = hoverPosition * audio.duration;

   timeTooltips.textContent = getTime(previewTime);
   timeTooltips.style.display = "block";
   timeTooltips.style.left = `${position}px`;
};

progressBar.addEventListener("mousemove", tooltipsTime);

progressBar.addEventListener("mouseout", function () {
   timeTooltips.style.display = "none";
});

audio.addEventListener("ended", function () {
   audio.currentTime = 0;
});
