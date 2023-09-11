// Viết hàm lấy ra màu ngẫu nhiên
// Lưu ý: Trả về mã màu hexa

function getRandomHexColor() {
   const letters = "0123456789ABCDEF";
   let color = "#";

   for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * 16);
      color += letters[randomIndex];
   }

   return color;
}

const randomColor = getRandomHexColor();
console.log(`màu hexa: ${randomColor}`);
