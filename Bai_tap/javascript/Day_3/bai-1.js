var textContainer = document.getElementById("text-container");
var contenText = textContainer.textContent;
// tách chuỗi thành mảng
var words = contenText.split(" ");

function animateRedText(index) {
    if (index >= words.length) {
        return;
    }

    var redText = "";

    for (var i = 0; i < words.length; i++) {
        if (i === index) {
            //  redtext đổi màu chữ
            redText += '<span style="color: red;">' + words[i] + "</span> ";
        } else {
            redText += words[i] + " ";
        }
    }

    textContainer.innerHTML = redText;

    setTimeout(() => {
        animateRedText((index + 1) % words.length);
    }, 500);
}

animateRedText(0);
