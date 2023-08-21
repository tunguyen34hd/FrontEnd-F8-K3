// Làm phẳng array sau (Chuyển về mảng 1 chiều)
// var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
// Kết quả
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
function flattenArray(arr) {
    return arr.reduce((acc, curr) => {
        return acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
    }, []);
}

var result = flattenArray(arr);
console.log(`mảng 1 chiều là: ${flattenArray(arr)}`);
