/*
4. Viết hàm kiểm tra số nguyên tố
Viết 1 hàm kiểm tra 1 số có phải số nguyên tố không:
    + Hàm có 1 tham số là số kiểm tra
    + Hàm có giá trị trả về 
    + Gọi hàm trong câu điều kiện if else
*/
var isPrime = function (n) {
    if (n % 1 !== 0 || n <= 1) {
        return false;
    }
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};
var number = 4;
if (isPrime(number)) {
    console.log(`Là số nguyên tố`);
} else {
    console.log(`Không là số nguyên tố`);
}
