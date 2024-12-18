// Currying using bind

// let multiply = function (x,y){
//     console.log(x*y);
// }

// let multiplyByTwo = multiply.bind(this,2)
// multiplyByTwo(4)

// let multiplyByThree = multiply.bind(this,3)
// multiplyByThree(5)

// ---------------------------------------------------------------------------------------------------------------

// Currying using function closures

// let multiply = function(x){
//     return function(y){
//         console.log(x*y);
//     }
// }

// let multiplyByTwo = multiply(2)
// multiplyByTwo(3)

// let multiplyByThree = multiply(3)
// multiplyByThree(7)


// ---------------------------------------------------------------------------------------------------------------

// Questions


// let sum = function(a){
//     return function(b){
//         return console.log(a+b)
//     }
// }
// sum(2)(3)

// ---------------------------------------------------------------------------------------------------------------


// let sum = function (a) {
    
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     }
//     return a;
//   };
// };


// console.log(sum(1)(2)(3)(4)(5)(5)());


// ---------------------------------------------------------------------------------------------------------------


// ES6 format


// let sum = a => b => b ? sum(a+b) : a

// console.log(sum(1)(2)(3)(4)(7)(10)());



// ---------------------------------------------------------------------------------------------------------------

// let a = ["apple","mango", "orange", "banana"]
// let b = ['a','e','i','o','u']

// let count = 0

// let vowel = function(a,b){
//     for(let val of a){
//         for (let vow of b){
//             if(val[0]===vow){
//                 count++
//             }
//         }
//     }
//     return count
// }

// console.log(vowel(a,b));