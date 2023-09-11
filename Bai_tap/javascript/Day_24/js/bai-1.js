// Viết hàm đảo ngược số nguyên với tham số là số cần đảo ngược
// Ví dụ: Khi gọi hàm và truyền đối số 12345 sẽ trả về kết quả 54321

function reverseInteger(number) {
   var strNumber = number.toString();
   var reversedStr = strNumber.split("").reverse().join("");
   var reversedNumber = parseInt(reversedStr);
   return reversedNumber;
}
var originalNumber = 12345;
var reversedNumber = reverseInteger(originalNumber);
console.log(reversedNumber);
