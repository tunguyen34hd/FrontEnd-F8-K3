/*
5. Vẽ tam giác số với N dòng:
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
*/

// var n = 10;
// var count = 0;
// var output = "";
// for (var i = 1; i <= n; i++) {
//     for (var j = 1; j <= i; j++) {
//         output += ++count + " ";
//     }
//     output += "</br>";
// }
// document.write(output);

var n = 10;
var count = 0;
var output = "";
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
        output += ++count + " ";
    }
    output += "</br>";
}
document.write(output);
