// Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì giữ lại 1 (Gọi là lọc trùng), In ra mnảg sau khi xử lý

var numbers = [10, 6, 1, 9, 1, 8];

var newArr = [];

for (var i = 0; i < numbers.length; i++) {
    // Kiểm tra nếu đã có thì bỏ qua
    if (newArr.includes(numbers[i])) {
        continue;
    }
    newArr[newArr.length] = numbers[i];
}

console.log(newArr);
