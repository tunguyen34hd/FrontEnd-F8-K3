/*
7. Vẽ bảng cửu chương từ 1 đến 10
*/

var columnHtml = "<tr>";
for (var i = 1; i <= 5; i++) {
    columnHtml += "<td>";

    for (var j = 1; j <= 10; j++) {
        columnHtml += `${i} x ${j} = ${i * j} <br/>`;
    }
    columnHtml += "</td>";
}
columnHtml += "</tr>";

columnHtml += "<tr>";
for (var i = 6; i <= 10; i++) {
    columnHtml += "<td>";

    for (var j = 1; j <= 10; j++) {
        columnHtml += `${i} x ${j} = ${i * j} <br/>`;
    }
    columnHtml += "</td>";
}
columnHtml += "</tr>";

var html = `<table width="100%" cellspacing="0" cellpadding="0" border="1">
${columnHtml}
</table>`;
document.write(html);
