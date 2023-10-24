// Setter, Getter
class User {
   #email = "hoangan@gmail.com"; //private
   constructor() {
      this.data = ["User 1", "User 2", "User 3"];
   }

   // Getter
   get lastest() {
      return this.data[this.data.length - 1];
   }

   // Getter
   get first() {
      return this.data[0];
   }
   get email() {
      return this.#email;
   }
   // Setter
   set email(value) {
      this.#email = value;
   }
}
const user = new User();
console.log(user.lastest);
console.log(user.first);
user.email = "contactfullstack.com";
console.log(user.email);

Array.prototype.__defineGetter__("length2", function () {
   console.log("hello F8");
});
const users = ["User 1", "User 2", "User 3"];
users.length2;
