// Storage --> Bộ nhớ trình duyệt
// --> Chỉ lưu trữ Text
// 1. localStorage: Lưu trữ không giói hạn thời gian
// -localStorage.getItem(key)
// -localStorage.setItem(key)
// -localStorage.removeItem(key)
// -localStorage.clear() --> Xóa hết

// 2. sessionStorage: Lưu trữ theo phiên của trình duyệt
// -sessionStorage.getItem(key)
// -sessionStorage.setItem(key)
// -sessionStorage.removeItem(key)
// -sessionStorage.clear() --> Xóa hết

/*
==> Đặc điểm chung
- Dung lượng lưu trữ hơn cookie (4-5MB)
- Không share được giữa các subdomain
- Khớp chính xác dựa theo tên miền, giao thức, cổng
- Không phân biệt path (Đường dẫn sau port)
*/

// 3. cookie: Lưu trữ theo thời gian chỉ định hoặc theo phiên
/*
- Dung lượng lưu trữ thấp (kb)
- Có thể share giữa các subdomain
- Có thể thiết lập được expire, nếu không thiết lập sẽ là session
- Tránh được tấn công XSS
- Dễ bị tấn công CSRF
- Khớp theo path
- An toàn hơn: Vì có httpOnly, Secure
- Cookie sẽ tự động đính kèm vào request header khi sử dụng trình duyệt
*/

// localStorage.setItem("username", "hoangan.web");
// console.log(localStorage.getItem("username"));
// localStorage.removeItem("username");

// document.cookie = "username=hoanganit19;domain=localhost";
// document.cookie = "username=hoanganF8; path=/hocJS";
// document.cookie = "email=hoangan@gmail.com;path=/";

// const expire = new Date("2023-11-14 09:55:00").toUTCString();
// console.log(expire);

// document.cookie = "usernam=hoangan; expires=" + expire;
// document.cookie = "usesrname=;expires=" + new Date().toUTCString();
// document.cookie = "usesrname=;max-age=360";

// Server --> Trả về Response Header: Set-Cookie

/*
res.header['Set-Cookie'] = 'username=hoanganit;max-age=3600;HttpOnly
*/
