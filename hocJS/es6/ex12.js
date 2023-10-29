/*
File chạy chính
Nối các file khác lại
*/

// import getMessage, { User as UserClass, customer, bestSeller,} from "./modules/home";
// import { getBestseller } from "./modules/product";

import * as home from "./modules/home.js";
const { default: getMessage, bestSeller } = home;
console.log(bestSeller);
getMessage();

// getMessage();
// const user = new User();
// const user = new UserClass();
// console.log(user);
// console.log(customer);
// console.log(getBestseller);

// index.js -> app.js -> a.js -> b.js -> c.js (import từ thư viện bên ngoài)

/*
Trong 1 folder -> có rất nhiều file cần import 
Nếu import hết các file này thủ công -> Rất nhiều

-> Giải pháp: Tạo ra file index.js trong 1 folder: Thực hiện các việc import tất cả các file

-> Khi nào cần import -> Import file index.js
*/
