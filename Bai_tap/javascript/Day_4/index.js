var lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quia commodi voluptatibus atque facere nemo fugit quis sed perferendis, minima dignissimos harum doloremque alias. Quasi deserunt debitis earum animi a?";
lorem += " ";
function th(a) {
    return function (b) {
        a = a + 500;
        setTimeout(function () {
            document.body.innerHTML = b;
        }, a);
    };
}
var c = th(500);
var acc = function (lorem) {
    var index = 0;
    var chuoi = lorem;
    for (var i = 0; i < lorem.length; i++) {
        if (lorem.charAt(i) === " ") {
            let select = lorem.slice(index, i);
            chuoi =
                lorem.slice(0, index) +
                "<span>" +
                select +
                "</span> " +
                lorem.slice(i + 1);
            index = i + 1;
            c(chuoi);
        }
    }
};

setInterval(function () {
    acc(lorem);
}, 1000);
