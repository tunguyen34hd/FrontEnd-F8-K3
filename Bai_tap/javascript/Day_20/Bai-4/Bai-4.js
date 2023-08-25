// Yêu cầu: Sử dụng phương thức đã học, không sử dụng các vòng lặp thuần
// Dựa vào hình ảnh giao diện sau, hãy thiết kế 1 mảng phù hợp và thực hiện đổ dữ liệu lên giao diện

var arr = [
    [
        "https://picsum.photos/350/200",
        "Tiêu đề bài tiết 1",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis enim quidem sit sapiente. Labore, iure quod qui, vero quidem nam accusantium suscipit officiis sint, libero iusto fugiat aspernatur? Unde ad voluptatum soluta? Necessitatibus laborum fugit amet blanditiis fugiat, illo placeat.",
    ],
    [
        "https://picsum.photos/350/200",
        "Tiêu đề bài tiết 2",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis enim quidem sit sapiente. Labore, iure quod qui, vero quidem nam accusantium suscipit officiis sint, libero iusto fugiat aspernatur? Unde ad voluptatum soluta? Necessitatibus laborum fugit amet blanditiis fugiat, illo placeat.",
    ],
    [
        "https://picsum.photos/350/200",
        "Tiêu đề bài tiết 3",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis enim quidem sit sapiente. Labore, iure quod qui, vero quidem nam accusantium suscipit officiis sint, libero iusto fugiat aspernatur? Unde ad voluptatum soluta? Necessitatibus laborum fugit amet blanditiis fugiat, illo placeat.",
    ],
    [
        "https://picsum.photos/350/200",
        "Tiêu đề bài tiết 4",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis enim quidem sit sapiente. Labore, iure quod qui, vero quidem nam accusantium suscipit officiis sint, libero iusto fugiat aspernatur? Unde ad voluptatum soluta? Necessitatibus laborum fugit amet blanditiis fugiat, illo placeat.",
    ],
];

var run = function (arr) {
    var result = arr.map(function (item) {
        return item.map(function (value, index) {
            switch (index) {
                case 0:
                    return `<div class="box"><div class="img"><img src="${value}" alt=""></div>`;
                case 1:
                    return `<div class="info"><h1 class="title">${value}</h1>`;
                case 2:
                    return `<p class="desc">${value}</p></div></div>`;
            }
        });
    });
    var arrstring = result.map(function (value) {
        return value.join("");
    });
    document.write(arrstring.join(""));
};
run(arr);

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
arr = arr.join();
arr = arr.split(",");
var result = arr.map(function (value) {
    return +value;
});
console.log(result);
