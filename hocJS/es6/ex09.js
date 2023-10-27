// Xử lý bất đồng bộ
/*
Trong Javascript tồn tại cả: đồng bộ và bất đồng bộ
- Đồng bộ: Chạy tuần tự từ trên xuống dưới, trái qua phải
- Bất đồng bộ: Chạy song song (Không quan tâm đến tiến trình trước đã hoàn thành hay chưa? )

Các cách xử lý bất đồng bộ
- Callback
- Promise
- Async Await Function
 */

// alert("ok");
// setTimeout(() => {
//    console.log("hello");
// }, 1000);
// console.log(2);

// const getUsers = (callback) => {
//    setTimeout(() => {
//       console.log("Users");
//       if (typeof callback === "function") {
//          callback();
//       }
//    }, 1000);
// };

// const showUsers = () => {
//    console.log("Hiển thị thông tin users");
// };

// getUsers(showUsers);

// const download1 = (callback) =>
//    setTimeout(() => {
//       console.log("download 1");
//       if (typeof callback === "function") {
//          callback();
//       }
//    }, 1000);

// const download2 = (callback) =>
//    setTimeout(() => {
//       console.log("download 2");
//       if (typeof callback === "function") {
//          callback();
//       }
//    }, 2000);

// const download3 = (callback) =>
//    setTimeout(() => {
//       console.log("download 3");
//       if (typeof callback === "function") {
//          callback();
//       }
//    }, 500);

const showMessage = (number) => {
   console.log("Download xong: " + number);
};

// download1(() => {
//    download2(() => {
//       download3(() => {
//          showMessage(3);
//       });
//    });
// });

// Chuyển từ cách viết callback -> chaining
// object.method().method().method()
// -> Promise Object xử lý các tác vụ bất đồng bộ
/*
Các trạn thái:
- pending
- fulfilled
- reject
*/

// const promise = new Promise((resolve, reject) => {
//    // resolve, reject là function
//    setTimeout(() => {
//       // resolve({ id: 1, name: "Hoàng An" });
//       reject("Error Network");
//    }, 1000);
// });
// Mặc định promise sẽ là pending, chỉ xử lý khi gọi then() hoặc catch() hoặc finally()
// promise
//    .then((response) => {
//       console.log(response);
//    })
//    .catch((error) => {
//       console.log(error);
//    })
//    .finally(() => {
//       console.log("Hoàn thành");
//    });
// console.log(promise);

const download1 = () =>
   new Promise((resolve, reject) => {
      setTimeout(() => {
         // resolve("download 1");
         reject("Error 1");
      }, 1000);
   });

const download2 = () =>
   new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve("download 2");
         // reject("error 2");
      }, 2000);
   });

const download3 = () =>
   new Promise((resolve) => {
      setTimeout(() => {
         resolve("download 3");
      }, 100);
   });

//

// Promise Chaining
download1()
   .then((data) => {
      console.log(data);
      return download2();
   })
   .then((data) => {
      console.log(data);
      return download3();
   })
   .catch((error) => {
      console.log(error);
      return download2();
   })
   .then((data) => {
      console.log(data);
      // return 1;
   })
   .then((data) => {
      console.log(data);
   });
