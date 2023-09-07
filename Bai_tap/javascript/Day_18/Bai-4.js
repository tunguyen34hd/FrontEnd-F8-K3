/*
Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau:
    + Sắp xếp mảng theo thứ tự tăng dần
    + Chèn thêm số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng
*/
var numbers = [10, 6, 1, 9, 1, 8];

numbers.sort(function (a, b) {
    return a - b;
});
var element = 4;

if (element < numbers[0]) {
    numbers.unshift(element);
} else if (element > numbers[numbers.length - 1]) {
    // numbers[numbers.length] = element;
    numbers.push(element);
} else {
    var indexInsert;
    for (var i = 0; i < numbers.length; i++) {
        if (element >= numbers[i] && element < numbers[i + i]) {
            indexInsert = i;
            break;
        }
    }
    numbers = [].concat(
        numbers.slice(0, indexInsert + 1),
        element,
        numbers.slice(indexInsert + 1)
    );
}
