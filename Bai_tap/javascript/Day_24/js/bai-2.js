// Viết hàm chuyển số thành chữ
// Ví dụ: Số 4298 sẽ chuyển thành: Bốn ngàn hai trăm chín tám
function numberToWords(number) {
   var units = [
      "",
      "một",
      "hai",
      "ba",
      "bốn",
      "năm",
      "sáu",
      "bảy",
      "tám",
      "chín",
   ];
   var teens = [
      "mười",
      "mười một",
      "mười hai",
      "mười ba",
      "mười bốn",
      "mười lăm",
      "mười sáu",
      "mười bảy",
      "mười tám",
      "mười chín",
   ];
   var placeValues = ["", "nghìn", "triệu", "tỷ", "nghìn tỷ", "triệu tỷ"];

   function convertChunk(chunk) {
      let chunkWords = "";
      var hundreds = Math.floor(chunk / 100);
      var tensAndOnes = chunk % 100;

      if (hundreds > 0) {
         chunkWords += units[hundreds] + " trăm ";
      }

      if (tensAndOnes >= 10 && tensAndOnes <= 19) {
         chunkWords += teens[tensAndOnes - 10];
      } else {
         var tens = Math.floor(tensAndOnes / 10);
         var ones = tensAndOnes % 10;

         if (tens > 0) {
            chunkWords += units[tens] + " mươi ";
         }

         if (ones > 0) {
            chunkWords += units[ones];
         }
      }

      return chunkWords;
   }

   if (number === 0) {
      return "không";
   }

   let result = "";
   let chunkIndex = 0;

   while (number > 0) {
      var chunk = number % 1000;
      if (chunk > 0) {
         var chunkWords = convertChunk(chunk);
         result = chunkWords + " " + placeValues[chunkIndex] + " " + result;
      }
      number = Math.floor(number / 1000);
      chunkIndex++;
   }

   return result.trim();
}

var number = 100000000;
var words = numberToWords(number);
console.log(words);
