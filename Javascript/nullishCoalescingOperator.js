// The nullish coalescing operator (??) is a JavaScript operator that provides a concise way to
// handle default values for variables when the variable is either null or undefined. It is 
// particularly useful when you want to provide a default value only if the variable is 
// explicitly null or undefined, and not for other falsy values like 0, '' (empty string), false, etc.


// Without nullish operator

// let count = null
// let defaultValue = 7

// if(count === null || count === undefined){
//     count = defaultValue
// }

// console.log(count);

// Using nullish operator

let counter = null
let defaultVal = 13

let result = counter ?? defaultVal

console.log(result);