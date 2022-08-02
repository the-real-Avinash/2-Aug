// class Human {
//   constructor() {
//     this.gender = "Male";
//   }
//   printGender() {
//     console.log(this.gender);
//   }
// }

// class Person extends Human {
//   constructor() {
//     super();
//     this.name = "Avinash";
//   }
//   printMyAge() {
//     console.log(this.name);
//   }
// }

// const person = new Person();
// person.printMyAge();
// person.printGender();

// const num = [1, 2, 3, 4];
// const newArray = [...num, 5, 6, 7];
// console.log(newArray);

// -----------------Spread Operator----------------------------
// const obj = {
//   sName: "Avinash",
//   lName: "Gavandhe",
// };

// const newArray = { ...obj, age: 22 };
// console.log(newArray);

// ---------------------------Rest Operator------------------------------

// const filter = (...args) => {
//   return args.filter((ele) => ele === 1);
// };
// console.log(filter(1, 2, 3, 4));

// -------------------------Array Destructuring --------------------------------

const arr = [1, 2, 3];
[num1, , num3] = arr;
console.log(num1, num3);
