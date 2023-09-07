// Tách phần tử trong mảng theo đúng kiểu dữ liệu
// var arr = [["a", 1, true], ["b", 2, false]]
//output: [["a", "b"], [1, 2], [true, false]]

var arr = [
    ["a", 1, true],
    ["b", 2, false],
];
// Kiểm tra có phải là mảng hay không?
if (Array.isArray(arr)) {
    arr = arr.flat(Infinity);
    var array = arr.reduce(function (prev, current) {
        var type = typeof current;
        if (!prev[type]) {
            prev[type] = [];
        }
        prev[type].push(current);
        return prev;
    }, []);

    var result = [];
    for (var index in array) {
        result.push(array[index]);
    }
    console.log(result);
}

// console.log(`Mảng ban đầu là : ${arr}`);
// var Arr = [];
// var arr = arr.filter(function (value) {
//     Arr = Arr.concat(value);
//     return true;
// });
// console.log(Arr);
// var newArr = [];
// Arr.forEach(function (value) {
//     var dem = 0;
//     for (var v of newArr) {
//         if (typeof v[0] === typeof value) {
//             v.push(value);
//             dem = 1;
//         }
//     }
//     if (dem === 0) {
//         var subarr = [];
//         subarr[subarr.length] = value;
//         newArr[newArr.length] = subarr;
//     }
// });

// console.log(`Mảng sau tách là : ${newArr}`);
