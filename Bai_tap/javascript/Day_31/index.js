var listData = [
   { type: "active", content: "Nhập môn lập trình web" },
   { type: "", content: "Giới thiệu HTML" },
   { type: "", content: "Giới thiệu CSS" },
   { type: "active", content: "Responsive website" },
   { type: "", content: "Tổng quan" },
   { type: "", content: "Media Query" },
   { type: "active", content: "Ngôn ngữ CSS" },
   { type: "", content: "Giới thiệu ngôn ngữ CSS - Cách viết CSS" },
   {
      type: "",
      content: "Cấu trúc CSS - Bộ chọn (Selector) trong CSS - Phần 1",
   },
   {
      type: "",
      content: "Bộ chọn CSS (Tiếp theo) - Các thuộc tính định dạng văn bản",
   },
   { type: "active", content: "Dự án cuối khóa" },
   { type: "", content: "Tổng quan và hướng dẫn xây dựng dự án" },
   { type: "", content: "Phân tích và tạo cấu trúc files, folder" },
   {
      type: "",
      content: "Cài đặt công cụ - Thiết lập load file header - footer",
   },
   {
      type: "",
      content: "Thiết lập định dạng chung cho file reset.css - base.css",
   },
   { type: "", content: "Xây dựng Header - Phần 1" },
];

function renderList(data) {
   var listContainer = document.getElementById("listContainer");
   var moduleCount = 1;
   var lessionCount = 1;
   listContainer.innerHTML = data
      .map(function (item) {
         return `
             <div
               class="list-item ${item.type}"
               draggable="true"
               ondragstart="handleDragStart(event)"
               ondragend="handleDragEnd()"
             >
               ${
                  item.type === "active"
                     ? `Module <span>${moduleCount++}</span>`
                     : `Bài <span>${lessionCount++}</span>`
               }
               : ${item.content}
             </div>
           `;
      })
      .join("");
}
// kéo
function handleDragStart(event) {
   var itemDragging = event.target;
   itemDragging.classList.add("dragging");
   event.dataTransfer.setData("text", itemDragging.innerHTML);
}
// thả và cập nhật lại stt của module và lession
function handleDragEnd() {
   var itemDragging = document.querySelector(".dragging");
   // bóng
   itemDragging.classList.remove("dragging");
   handleRoll();
}

document.addEventListener("DOMContentLoaded", function () {
   // renderList(listData);
   var listContainer = document.getElementById("listContainer");

   listContainer.addEventListener("dragover", function (e) {
      e.preventDefault();
      var draggedElement = document.querySelector(".dragging");
      var target = e.target;

      if (
         target.classList.contains("list-item") ||
         target.classList.contains("active")
      ) {
         var rect = target.getBoundingClientRect();
         var nextElement =
            e.clientY < rect.top + rect.height / 2
               ? target
               : target.nextElementSibling;

         if (nextElement && nextElement !== draggedElement) {
            listContainer.insertBefore(draggedElement, nextElement);
         }
         // console.log(nextElement);
      }
   });

   listContainer.addEventListener("drop", function (e) {
      e.preventDefault();
   });
});

// hàm cập nhật lại stt của module và lession
function handleRoll() {
   var listContainer = document.getElementById("listContainer");
   //lấy ra module
   var moduleItems = Array.from(listContainer.querySelectorAll(".active span"));
   // lession
   var lessionItems = Array.from(
      listContainer.querySelectorAll(".list-item:not(.active) span")
   );

   var moduleCounter = 1;
   var lessonCounter = 1;

   moduleItems.forEach(function (item) {
      item.innerText = `${moduleCounter++}`;
   });

   lessionItems.forEach(function (item) {
      item.innerText = `${lessonCounter++}`;
   });
}

renderList(listData);
