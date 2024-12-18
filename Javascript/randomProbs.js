// Function that returns sum of any no. of args

// function sum(...args){
//     return args.reduce((total,num)=>total+num,0)
// }
// console.log(sum(3,5,2));
// console.log(sum(1,5));
// console.log(sum(5,6,7,4,6));
// -----------------------------------------------------------------------------------------------------------

// Promise

// let a = "hello"
// let b = "helo"

// let promise = new Promise ((resolve,reject)=>{
//     if(a===b){
//         resolve("success")
//     }else{
//         reject(new Error("Failed"))
//     }
// })

// promise.then((resolve)=>{
//     console.log(resolve);
// }).catch((reject)=>{
//     console.log(reject.message);
// })
// -----------------------------------------------------------------------------------------------------------

// Shadowing & Illegal Shadowing

var a = 25;

{
  let a = 70;
  console.log(a);
}

// -----------------------------------------------------------------------------------------------------------

// Shallow and deep Copy

// let a = {
//     name:"Neehar",
//     place:"Kannur"
// }

// let c = JSON.parse(JSON.stringify(a))

// a.name="Sachin"

// console.log(a);
// console.log(c);

// -----------------------------------------------------------------------------------------------------------

// Prototypal Inheritance

// const person = {
//     name: "John Doe",
//     age: 30,
//     greet: function() {
//       console.log(`Hello, my name is ${this.name}`);
//     }
//   };

//   const employee = {
//     kundi: person,
//     jobTitle: "Software Engineer",
//     greet: function() {
//       console.log(`Hello, my name is ${this.name} and I am a ${this.jobTitle}`);
//     }
//   };

//   const manager = {
//    andi: employee,
//     department: "Engineering",
//     greet: function() {
//       console.log(`Hello, my name is ${this.name} and I am a ${this.jobTitle} in the ${this.department} department.`);
//     }
//   };

//   person.greet(); // Output: Hello, my name is John Doe
//   employee.greet(); // Output: Hello, my name is John Doe and I am a Software Engineer
//   manager.greet(); // Output: Hello, my name is John Doe and I am a Software Engineer in the Engineering department.

// -----------------------------------------------------------------------------------------------------------

// const greet = (firstName, lastName) => {
//     console.log(`Hello, ${firstName} ${lastName}!`);

//     // Access arguments object using 'arguments' keyword
//     console.log(`Arguments: ${arguments}`); // Error: Cannot access 'arguments' inside arrow function
//   };

//   greet("John Doe", "Jane Doe");

// function greet(firstName, lastName) {
//     console.log(`Hello, ${firstName} ${lastName}!`);

//     // Access arguments object using 'arguments' keyword
//     console.log(`Arguments: ${arguments}`); // Output: Arguments: John Doe,Jane Doe
//   }

//   greet("John Doe", "Jane Doe");

// const data = {
//     fruits: ['apple', 'banana'],
//     vegetables: ['carrot', 'tomato']
//   };

//   const { fruits: [fruit1], vegetables: [vegetable2] } = data;
//   console.log(fruit1); // Output: apple
//   console.log(vegetable2); // Output: tomato

// map

// let arr=[1,2,3,4,5]

// let odd = arr.map((x)=>x%2==0)
// console.log(odd);

// splice

// const numbers = [1,2,3,4,5,6,7]

// numbers.splice(1,1,42)
// console.log(numbers)

// // slice

// let subArray= numbers.slice(1,5)
// console.log(subArray);

// const arr= [ 1,2,3,4,5,6,7]
// var result = []
// for(let i =0;i <arr.length; i++){
//     if(arr[i]%2 == 0){

//     }
// }
// console.log(result)

// arr=[1,2,3,4,5,6,7]

// newArr=[...arr,8,9]
// console.log(newArr);

// function func() {
// 	var a = 'Geeks';
// 	let b = 'Geeks';

// 	if (true) {
// 		let a = 'GeeksforGeeks'; // Legal Shadowing
// 		var b = 'Geeks'; // Illegal Shadowing
// 		console.log(a); // It will print 'GeeksforGeeks'
// 		console.log(b); // It will print error
// 	}
// }
// func();
