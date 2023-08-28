var user = {
    name: "Hoang An",
    email: "hoangan@gmail.com",
    getInfo: function () {
        console.log(this);
        return `
            - Name: ${this.name}
            - Email: ${this.email}
        `;
    },
    children: {
        address: "Hà Nội",
        getAddress: function () {
            return this.address;
        },
        getName: function (_this) {
            console.log(this);
            return _this.name;
        },
        // getName: function (_this) {
        //     console.log();
        //     return this.name;
        // },
    },
};

// console.log(this);
// console.log(user);
console.log(user.getInfo());
console.log(user.children.getAddress());
console.log(user.children.getName(user));
// console.log(user.children.getName.bind(user)());

var customer = {
    name: "Hoang An",
    email: "hoangan@gmail.com",
    teacher: {
        name: "Hoang An F8",
        salary: 5000000,
        histories: [
            {
                year: 2020,
                name: "Công việc 1",
            },
            {
                year: 2021,
                name: "Công việc 2",
            },
            {
                year: 2022,
                name: "Công việc 3",
            },
        ],
    },
};

console.log(customer.teacher.histories[0].name);
