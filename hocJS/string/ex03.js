var content = `Hoàng An F8 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam fugit eos cumque recusandae deserunt, ducimus reiciendis doloremque sequi voluptas harum corrupti, corporis iste magni mollitia porro iure quam aut consequatur lorem abc.`;

var keyword = "lorem";

var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var result = "";
var count = 0;

while (position !== -1) {
    result +=
        content.slice(0, position) +
        `<span>${content.slice(position, position + keyword.length)}</span>`;
    content = content.slice(position + keyword.length);

    // Tìm lại với content mới => Quay lại bước trên
    position = content.toLowerCase().indexOf(keyword.toLowerCase());
    count++;

    //Thay đổi content (Bỏ đoạn đã tìm được)
    //Tìm lại: indexOf()
    //Thêm span và nối vào result
}

result += content;

var title = `<p>Tìm kiếm với từ khóa <b>${keyword}</b></p>`;

var bottom = `<p>Đã tìm thấy <b>${count}</b> kết quả với từ khóa <b>${keyword}</b></p>`;

document.write(title + result + bottom);
