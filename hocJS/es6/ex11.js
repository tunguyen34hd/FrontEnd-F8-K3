// Async Await
/*
- Async: function -> Luôn trả về 1 promise
- Await: Gọi promise
*/
// const getUser = async () => {
//    return "Hoang An";
// };

// // console.log(getUser());
// getUser().then((data) => {
//    console.log(data);
// });

const getUser = () =>
   new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve("Hoang An");
         reject("Error");
      }, 1000);
   });
const getUser2 = () =>
   new Promise((resolve) => {
      setTimeout(() => {
         resolve("Hoang An2");
         // resolve();
      }, 1000);
   });

// const showUser = async () => {
//    const user = await getUser();
//    console.log(user);
//    const user2 = await getUser2();
//    console.log(user2);
// };
// showUser();

// IIFE
// (async () => {
//    try {
//       // const user = await getUser();
//       // console.log(user);
//       const user2 = await getUser2();
//       if (!user2) {
//          throw new Error("Không lấy được giá trị");
//       }
//       console.log(user2);
//    } catch (e) {
//       console.log(e);
//    } finally {
//       console.log("Hoàn Thành");
//    }
//    // const user2 = await getUser2();
//    // console.log(user2);
// })();

const sendRequest = () => {
   return new Promise((resolve) => {
      const response = {
         status: "succes",
         get: () => Promise.resolve("Dữ liệu trả về"),
      };
      // resolve("Lần 1");
      resolve(response);
   });
};

const getInfo = async () => {
   // const res = await sendRequest();
   // const data = await res.get();
   // return getUser();
   // return await getUser();
   // return { res, data };
   // return sendRequest();
   try {
      // return await getUser(); //Trả về dữ liệu đã resolve
      return getUser(); //Trả về 1 promise
   } catch (e) {
      console.log(e);
   }
};

getInfo().then((data) => {
   console.log(data);
   return response.get();
});
