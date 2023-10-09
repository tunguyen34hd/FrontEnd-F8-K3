var btnSave = document.querySelector(".btn-save");
var newBtn = document.getElementById("new-btn");
var txtBtn = document.getElementById("txt-btn");
var pdfBtn = document.getElementById("pdf-btn");
var boldBtn = document.getElementById("bold-btn");
var underlineBtn = document.getElementById("underline-btn");
var italicBtn = document.getElementById("italic-btn");
var colorBtn = document.getElementById("color-chosen");
var dropMenu = document.querySelector(".drop-menu");
var content = document.getElementById("content");
var inputSave = document.querySelector(".input-save");

btnSave.addEventListener("click", function (e) {
   if (dropMenu.style.display === "none" || dropMenu.style.display === "") {
      dropMenu.style.display = "block";
   } else {
      dropMenu.style.display = "none";
   }

   e.stopPropagation();
});

document.addEventListener("click", function () {
   dropMenu.style.display = "none";
});

newBtn.addEventListener("click", function () {
   content.innerHTML = "";
});

boldBtn.addEventListener("click", function () {
   var isBold = document.queryCommandState("bold");

   if (isBold) {
      document.execCommand("bold", false, null);
   } else {
      document.execCommand("bold", false, null);
   }
});

underlineBtn.addEventListener("click", function () {
   var isUnderLine = document.queryCommandState("underline");

   if (isUnderLine) {
      document.execCommand("underline", false, null);
   } else {
      document.execCommand("underline", false, null);
   }
});

italicBtn.addEventListener("click", function () {
   var isItalicBtn = document.queryCommandState("italic");

   if (isItalicBtn) {
      document.execCommand("italic", false, null);
   } else {
      document.execCommand("italic", false, null);
   }
});

colorBtn.addEventListener("input", function () {
   var selectedColor = colorBtn.value;
   document.execCommand("foreColor", false, selectedColor);
});

txtBtn.addEventListener("click", function () {
   var fileName = inputSave.value || "untitled";
   var fileContent = content.textContent;
   var blob = new Blob([fileContent], { type: "text/plain" });
   var url = URL.createObjectURL(blob);
   var a = document.createElement("a");
   a.href = url;
   a.download = fileName + ".txt";
   a.click();
   URL.revokeObjectURL(url);
});

pdfBtn.addEventListener("click", function () {
   var fileName = inputSave.value || "untitled";
   var fileContent = content.innerHTML; // Sử dụng innerHTML thay vì textContent

   var element = content;

   var options = {
      margin: 10,
      filename: fileName + ".pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
   };

   html2pdf()
      .from(element)
      .set(options)
      .outputPdf()
      .then(function (pdf) {
         pdf.save();
      });
});
