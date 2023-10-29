import { getProducta, getBestseller } from "./products.js";
export default function getMessage() {
   console.log("Hello");
}

export class User {
   constructor() {
      this.name = "Hoang An";
   }
}

export const customer = { name: "Hoang An", email: "hoanganan@gmail.com" };
export const bestSeller = getBestseller();

// export default getMessage; //Export Default chỉ có 1

// Export named -> Có thể có nhiều, bắt buộc phải đưa vào object
// export { User, customer };
