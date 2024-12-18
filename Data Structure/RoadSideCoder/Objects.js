// const property = "firstName";
// const name = "Sachin";

// const user = {
//   [property]: name,
// };

// console.log(user);

// !__________________________________________________________________________________

// let obj = {
//   a: 100,
//   b: 200,
//   title: "my nums",
// };

// multiplyByTwo(obj);

// function multiplyByTwo(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// console.log(obj);
// !__________________________________________________________________________________

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b])

// !__________________________________________________________________________________

// const user = {
//     name: "Sachin",
//     age:26,
// }

// const strObj = JSON.stringify(user)

// // localStorage.setItem('test', strObj)
// // console.log(localStorage.getItem('test'));
// console.log(JSON.parse(strObj))

// !__________________________________________________________________________________

// console.log([...'Sachin']);
// !__________________________________________________________________________________

// const user = {
//     name:"Sachin", age :26
// }

// const admin = {
//     admin:true, ...user
// }

// console.log(admin);
// !__________________________________________________________________________________

// const settings = {
//     userName: 'Sachin Kizhakkepurath',
//     level: 17,
//     health : 90,
// }

// const data = JSON.stringify(settings, ['level', 'health'])

// console.log(data)

// !__________________________________________________________________________________

// const shape = {
//     radius: 10,
//     diameter() {
//         return 2 * this.radius
//     },
//     perimeter:()=> {

//         return 2 * Math.PI * shape.radius
//     }
// }

// console.log(shape.diameter())
// console.log(shape.perimeter())

// !__________________________________________________________________________________
// * Destructuring

// let user = {
//   name: "Sachin",
//   age: 26,
//   fullName: {
//     firstName: "Sachin",
//     lastName: "Kizhakkepurath",
//   },
// };

// const {
//   fullName: { lastName },
// } = user;

// console.log(lastName);

// !__________________________________________________________________________________
// * rest vs spread

// function getItems(fruitList, favoriteFruit, ...args) {
//     return [...fruitList,...args,favoriteFruit]
// }

// console.log(getItems(['banana','apple'],'pear','orange'));

// !__________________________________________________________________________________

// * Referencing

// let c = { greeting: 'Hi' }
// let d;

// d = c;
// c.greeting = 'Hello'

// console.log(d.greeting);
//? ---------------------------------------
// console.log({a:1} == {a:1});
// console.log({a:1} === {a:1});
//? ---------------------------------------

// let person = {
//   name: "Sachin",
// };

// const members = [person];

// person = null;

// console.log(members);

// ?-------------------------------------------

const value = {
    number : 10
}

const multiply = (x={...value}) => {
   console.log( (x.number *= 2));
}

multiply()
multiply()
multiply(value)
multiply(value)
// ?-------------------------------------------

// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//         name: 'John',
//         age: 50
//     };
//     return person;
// }

// const personObj1 = {
//     name: 'Alex',
//     age:30
// }

// const personObj2 = changeAgeAndReference(personObj1)

// console.log(personObj1);
// console.log(personObj2);

// !__________________________________________________________________________________

// * Shallow vs Deep Copy

//? When one object holds the reference to another object, this is called a shallow copy.

//? But when we completely clone an object into another variable that is called a deep copy

let user = {
  name: "Sachin Kizhakkepurath",
  age: 26,
};

//* const objClone = Object.assign({}, user);
//* const objClone = JSON.parse(JSON.stringify(user))
const objClone = {...user}


objClone.name = "Zak";
console.log(user, objClone);
