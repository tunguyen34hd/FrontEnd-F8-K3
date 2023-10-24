// Static: Method, Property

class User {
   constructor() {
      // Thuộc tính non-static
      this.username = "Hoang An";
   }

   // Thuộc tính static
   static email = "hoangan@gmail.com";

   // Phương thức static
   static getEmail() {
      return this.email;
   }

   // Phương thức non-static
   getName() {
      return this.username;
   }

   static getUsername() {
      // This sẽ là class User
      // Muốn truy cập đến phương thức, thuộc tính non-static -> Chuyển thành Object
      // console.log(this);
      // console.log("Hello F8");
      console.log(new this().username);
   }

   showEmail() {
      // This sẽ là object của class User
      // Muốn truy cập đến phương thức, thuộc tính static -> Chuyển về class
      // console.log("Hello F8");
      console.log(this.constructor.email);
   }
}

// User.getUsername();

// const user = new User();
// user.showEmail();

// User.email = "contactfullstack.vn";
// console.log(User.email);

// const user = new User();
// user.username = "Hoang An F8";
// console.log(user);

// const user2 = new User();
// console.log(user2);

// console.log(User.getEmail());

class Person {
   static self = null;
   constructor() {
      this.constructor.self = this;
      console.log("Constructor");
      this.name = "Hoang An";
      this.email = "hoangan@gmail.com";
      this.age = 30;
   }

   static getEmail() {
      // return new this().email;
      if (!this.self) {
         return new this().email;
      }
      return this.self.email;
   }

   static getName() {
      // return new this().name;
      if (!this.self) {
         return new this().name;
      }
      return this.self.name;
   }
}

const person = new Person();
console.log(person.age);
console.log(Person.getName());
console.log(Person.getEmail());
