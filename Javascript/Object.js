// const car = {
//   make: "Nissan",
//   model: "Skyline",
//   year: "2010",
// };
//-------------------------------------------------------------------------------------------------------------------

// For in loop

// for (let x in car) {
//   if (car.hasOwnProperty(x)) {
//     console.log(`Key:${x}, Value:${car[x]}`);
//   }
// }
//-------------------------------------------------------------------------------------------------------------------

// Object.keys method

// const keys = Object.keys(car);

// for (let key of keys) {
//   console.log(`Key:${key} Value:${car[key]}`);
// }
//-------------------------------------------------------------------------------------------------------------------

// Object.entries method

// const entries = Object.entries(car);

// for (let [key, value] of entries) {
//   console.log(`Key:${key}, Value:${value}`);
// }

//-------------------------------------------------------------------------------------------------------------------

// Object.value method

// const values = Object.values(car);

// for (let value of values) {
//   console.log(`Value:${value}`);
// }

//-------------------------------------------------------------------------------------------------------------------

// Question => .reduce(): count occurrences

// const array = [1, 3, 2, 3, 1, 2, 3, 1, 2, 3, 4, 5, 4, 5, 6];

// const countOccurence = array.reduce((acc, currValue) => {
//   if (acc[currValue]) {
//     acc[currValue]++;
//   } else {
//     acc[currValue] = 1;
//   }
//   return acc;
// }, {});

// console.log(countOccurence);
//-------------------------------------------------------------------------------------------------------------------

// Question => find non-repeating elements in array

// function findNonRepeatingElements(arr) {
//   let result = arr.filter(
//     (ele, index, arr) => arr.indexOf(ele) == arr.lastIndexOf(ele)
//   );
//   return result;
// }

// const array = [1, 2, 4, 3, 2, 1, 6, 4, 7, 1000, 8, 9, 55, 4, 3];
// const result = findNonRepeatingElements(array);

// console.log(result);
// ________________________________________________________________________________________________________________________________
// const arr = [1, 2, 3, 1, 2, 3, 4, 5, 65, 4, 3, 5, 6, 7, 8, 9];

// const result = arr.filter(
//   (ele, index, arr) => arr.indexOf(ele) === arr.lastIndexOf(ele)
// );

// console.log(result);
//-------------------------------------------------------------------------------------------------------------------

// Question: function to return the sum of all arguments passed to it (rest param)

// const sum = function (...args){
//     return args.reduce((acc,curr)=>{
//         return acc+curr
//     })
// }

// const result = sum(1,3,4,2,23,32,3,223,23,23,2)

// console.log(result);

const sum = (...args) => {
  return args.reduce((acc, curr) => acc + curr);
};
const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);

//-------------------------------------------------------------------------------------------------------------------

// generator function to generate multiples of a given number

// function* multipleGenerator(base) {
//   let multiple = 1;
//   while (true) {
//     yield base * multiple;
//     multiple++;
//   }
// }

// const result = multipleGenerator(4);

// for (let i = 0; i < 10; i++) {
//   console.log(result.next().value);
// }

// function* multiples(base) {
//   let multiple = 1;

//   while (true) {
//     yield multiple * base;
//     multiple++;
//   }
// }

// let result = multiples(6);

// let count = 1;

// do {
//   console.log(result.next().value);
//   count++;
// } while (count <= 10);

//-------------------------------------------------------------------------------------------------------------------

// Question => throwing errors, try catch
// function divide(a,b){
//     if(b===0){
//         throw new Error("Division by zero is not permitted")
//     }
//     return a/b
// }

// try {
//     const result = divide(5,0)
//     console.log(result);
// } catch (error) {
//     console.error("An error has occured:", error.message)
// }finally{
//     console.log("Finally")
// }

//-------------------------------------------------------------------------------------------------------------------

// Question: flatten a 3D array

// const arr = [[[1,2],[3,4]],[[5,6],[7,8]],[[9,10],[11,12]]]
// let b = []

// let n = 0

// let flat = function (a){
//     for (let val of a ){
//         if(typeof val === 'number'){
//             b[n]=val
//             n++
//         }else{
//             flat(val)
//         }
//     }
// }

// flat(arr)
// console.log(b)

//-------------------------------------------------------------------------------------------------------------------
// const array3D = [
//     [
//       [1, 2, 3],
//       [4, 5, 6]
//     ],
//     [
//       [7, 8, 9],
//       [10, 11, 12]
//     ],
//     [
//       [13, 14, 15],
//       [16, 17, 18]
//     ]
//   ];

//   let flatArray = []

//   let index = 0

//   const flat = function (arr){
//     for(let val of arr){
//         if(typeof val === "number" ){
//             flatArray[index] = val
//             index++
//         }else{
//             flat(val)
//         }
//     }
//   }

//   flat(array3D)

//   console.log(flatArray)

//-------------------------------------------------------------------------------------------------------------------

// const car = {
//     make:"Nissan",
//     model:"Skyline",
//     year:"2010",
//     owner:{
//         name:"Niyas"
//     }

// }

// Object.freeze(car)

// console.log(Object.isFrozen(car))
// delete car.owner.name;

// console.log(car)

//-------------------------------------------------------------------------------------------------------------------

// const a = [[1, 2], [3, 4], [[[[{a:1},[[[[[[[[[[[[[5]]]]]]]]]]]]]]]]]];
// // const a = [[[1,2],[3,4]],[[5,6],[7,8]]]
// let b = []
// let n=0

// let flat = function(x){
//     for(let val of x){
//         if(typeof val === "number"){
//             b[n]=val
//             n++
//         }else{
//             flat(val)
//         }
//     }
// }

// flat(a)
// console.log(b)
//-------------------------------------------------------------------------------------------------------------------

// let sum = function (a,b){
//     return a + b
// }

// console.log(sum(4,3));
//-------------------------------------------------------------------------------------------------------------------

// let a = [1,2,3,4,5,6,7,2,3,4,6,75]

// let maxValue = a.reduce((max,curr)=>{
//     return curr>max?curr:max
// },a[0])

// console.log(maxValue);
//-------------------------------------------------------------------------------------------------------------------

// let a = ["Niyas","Anwar","Sachin"]

// let long = a.reduce((acc,curr)=>{
//     return curr.length > acc.length ? curr : acc
// },a[0])

// console.log(long.length);
//-------------------------------------------------------------------------------------------------------------------
// let a = [1,2,3,4,5,6]
// let b = [7,8,9,10]

// let c = [...a,...b]
// console.log(c);
//-------------------------------------------------------------------------------------------------------------------

// let i = 10
// setTimeout(function() {
//   console.log(i);
//   i = 5
// }, 1000);

// setTimeout(function() {
//   console.log(i);
// }, 1200);

// i = 200

//-------------------------------------------------------------------------------------------------------------------
// const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "gray","black",
//  "white","red","violet",
// "red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "gray", "black", "white",
// "red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "gray", "black", "white",
// "orange", "pink",
//  "brown", "gray", "black",];

//  function findNonRepeatingElements (arr){

//         const countOccurence = arr.reduce((acc,curr)=>{
//             if(acc[curr]){
//                 acc[curr]++
//             }else{
//                 acc[curr]=1
//             }
//             return acc
//         },{})

//         const nonRepeatingElements = Object.keys(countOccurence).filter(key => countOccurence[key]===1)
//         return nonRepeatingElements
//     }

//     const result = findNonRepeatingElements(colors)

//     console.log(result);

//     // OR

// let empty = {}

// for(let i = 0; i<colors.length; i++){
// if(empty[colors[i]] !== undefined){
//     empty[colors[i]]=empty[colors[i]] + 1
// }else{
//     empty[colors[i]]=1
// }
// }
// for(let val in empty){
//     if(empty[val]===1){
//         console.log(val)
//     }
// }

//-------------------------------------------------------------------------------------------------------------------

// class Trial {

//     store
//     constructor(arg){
//         this.store = arg
//     }

//     static property="hello"

//     static method(){
//         console.log("hi")
//     }
// }

// let instance = new Trial("Hi")
// console.log(instance.store);
//  instance.method()

//  Trial.method()

// console.log(Trial.property);
//-------------------------------------------------------------------------------------------------------------------

// const colors = ['red','green'];

// // Destructuring with default values
// const [primary, secondary = 'yellow'] = colors;

// console.log(primary);   // Output: red
// console.log(secondary);

//-------------------------------------------------------------------------------------------------------------------

//Vowels

// const alphabetArray = [
//     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
//   ];
// const reference = ['a','e','i','o','u']

// const vowels = function(arr,ref){
// for(let val of arr){
//     for(let vow of ref){
//         if(val === vow){
//             console.log(val)
//         }
//     }
// }
// }

// vowels(alphabetArray,reference)

//-------------------------------------------------------------------------------------------------------------------

// Vowels using regex

// const alphabetArray = [
//     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
//   ];

//   const regex = /[aeiou]/ig

//   let result = alphabetArray.join('').match(regex)

//   console.log(result);

//-------------------------------------------------------------------------------------------------------------------

// Variety
// const a = [[4,5],[6,7],[1,2],[8,9]]

// const print = function(x){
//     for(let val of x){
//         for(i=0;i<val[1];i++){
//             console.log(val[0])
//         }
//     }
// }

// print(a)

//-------------------------------------------------------------------------------------------------------------------
// Promise

// function delayedResult(number){
//     return new Promise((resolve)=>{
//         if(number % 2 === 1){
// setTimeout(() => {
//     resolve("Odd")
// }, 1000);

//         }else{
//             setTimeout(() => {
//                 resolve("Even")
//             }, 2000);
//         }
//     })
// }

// delayedResult(4).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.error(error)
// })

//-------------------------------------------------------------------------------------------------------------------

// Currying

// const sum = function (a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     } else {
//       return a;
//     }
//   };
// };

// console.log(sum(1)(2)(3)(4)(5)());
//-------------------------------------------------------------------------------------------------------------------

// ERROR HANDLING MIDDLE WARE

// app.use((error,req,res,next)=>{
//     error.statusCode = error.statusCode || 500
//     error.status = error.status || 'error'
//     res.status(error.statusCode).json({
//         status: error.statusCode,
//         message: error.message
//     })
// })

// const promise = new Promise((resolve, reject) => {
//   let a = 11;

//   setTimeout(() => {
//     if (a % 2 == 0) {
//       resolve("Even");
//     } else {
//       reject("Odd");
//     }
//   }, 3000);
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
