// Cho trước mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí
var numbers = [5, 2, 1, 9, 8];

var max = numbers[0];
var min = numbers[0];
var maxIndex = 0;
var minIndex = 0;

// for (var i = 1; i < numbers.length; i++) {
//     // Tìm max
//     if (max < numbers[i]) {
//         max = numbers[i];
//     }

//     // Tìm min
//     if (min > numbers[i]) {
//         min = numbers[i];
//     }
// }

// C2
for (var i in numbers) {
    // Tìm max
    if (max < numbers[i]) {
        max = numbers[i];
        maxIndex = i;
    }

    // Tìm min
    if (min > numbers[i]) {
        min = numbers[i];
        minIndex = i;
    }
}

console.log(`Giá trị lớn nhất là: ${max} - Vị trí: ${maxIndex}`);
console.log(`Giá trị nhỏ nhất là: ${min} - Vị trí: ${minIndex}`);
