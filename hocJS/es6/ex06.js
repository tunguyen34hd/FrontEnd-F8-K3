// Classes -> Tạo ra bản mẫu của 1 đối tượng

class User {
   // Khai báo thuộc tính private
   #age;
   constructor(name, email) {
      // Phương thức khởi tạo của class
      // Chạy đầu tiên khi đối tượng được khởi tạo
      // Khai báo các thuộc tính, giá trị mặc định, nhận các đối số của class
      this.name = name;
      this.email = email;
      this.#age = 30;
   }

   // Phương thức
   getName() {
      return this.name;
   }

   getEmail() {
      return this.email;
   }
   setAge(value) {
      this.#age = value;
   }

   getAge() {
      return this.#age;
   }
}

// const user = new User("hoang an", "hoangan.web@gmail.com");
// console.log(user);
// user.setAge(35);
// console.log(user.getAge());
// console.log(user.name);
// console.log(user.email);
// console.log(user.getName());
// console.log(user.getEmail());

// class Counter {
//    constructor() {
//       this.root = document.querySelector("#root");
//       this.count = 0;
//       this.render();
//    }

//    handleIncrement = () => {
//       // Tăng thuộc tính this.count
//       // render
//       this.count++;
//       this.render();
//    };

//    render() {
//       this.root.innerHTML = `<h1>${this.count}</h1>
//       <button>+</button>`;
//       const btn = this.root.querySelector("button");
//       btn.addEventListener("click", this.handleIncrement);
//    }
// }

// new Counter();

// Kế thừa: extends
class Authentication extends User {
   // Kế thừa tất cả các thuộc tính, phương thức của class User
   constructor(name, email) {
      console.log(`Authetication Constructor`);
      // Gọi constructor của cha
      super(name, email);
      this.isLogin = true;
   }
   getInfo() {
      return `
      Name: ${this.getName()}
      Email: ${this.getEmail()}`;
   }
   check() {
      return this.isLogin;
   }
}

class Authorization extends Authentication {
   constructor(name, email) {
      super(name, email);
      this.role = "admin";
   }
}
// const auth = new Authentication("Hoang An", "hoangan.web@gmail.com");
// console.log(auth);
// console.log(auth.getInfo());
// console.log(auth.check());

// A -> B -> C -> D

Authorization.prototype.message = "F8";

const authorization = new Authorization("Hoang An", "hoangan@gmail.com");
console.log(authorization);
// User -> Authentication -> Authorization
