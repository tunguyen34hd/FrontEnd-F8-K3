var content =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

content = content.replaceAll(" ", "</span> <span>");
content = `<span>${content}</span>`;

var index = 0;
setInterval(function () {
    var char = content.charAt(index);
    var charNext = content.charAt(index + 1);

    if (char === ">" && charNext !== " ") {
        var html =
            content.slice(0, index) +
            ` class="highlight"` +
            content.slice(index);
        document.body.innerHTML = html;
    }
    index++;
    if (index === content.length) {
        index = 0;
    }
}, 50);

document.write(content);

// var textContainer = document.getElementById("text-container");
// var contenText = textContainer.textContent;
// // tách chuỗi thành mảng
// var words = contenText.split(" ");

// function animateRedText(index) {
//     if (index >= words.length) {
//         return;
//     }

//     var redText = "";

//     for (var i = 0; i < words.length; i++) {
//         if (i === index) {
//             //  redtext đổi màu chữ
//             redText += '<span style="color: red;">' + words[i] + "</span> ";
//         } else {
//             redText += words[i] + " ";
//         }
//     }

//     textContainer.innerHTML = redText;

//     setTimeout(() => {
//         animateRedText((index + 1) % words.length);
//     }, 500);
// }

// animateRedText(0);
