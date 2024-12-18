const str = 'Become the best version of yourself!'

//* String Length

//? console.log(str.length)
//!_______________________________________________________

//* Accessing Character

//?  console.log(str[7])
//? console.log(str.charAt(7))

//!_______________________________________________________

// * Looping

//? for (let i = 0; i < str.length; i++){
//?     console.log(str[i]);
//? }

//!_______________________________________________________

//* Modifying String

//? console.log(str.replace('e','i'));
//? console.log(str.replaceAll('e','i'));


//!_______________________________________________________

// * Concat

//? const concat = str.concat(' Now.')
//? console.log(concat)

//!_______________________________________________________

// * Trim

//? const space = "  Hello World   "

//? console.log(space.trim())

//!_______________________________________________________

// * Search

//? console.log(str.indexOf('e'))
//? console.log(str.lastIndexOf('e'))
//? console.log(str.startsWith('B'))
//? console.log(str.endsWith('!'))

//!_______________________________________________________

// * Extracting Substring

//? console.log(str.substring(16,23))
//? console.log(str.slice(27,-1))

//!_______________________________________________________
// * Converting Case

//? const object = { name: 'Sachin' }
//? console.log(JSON.stringify(object))

//? console.log(str.toUpperCase())
//? console.log(str.toLowerCase())

//!_______________________________________________________

// * ASCII Value

//? console.log(str.charCodeAt(0))
//? console.log(String.fromCharCode(66));

//!_______________________________________________________

// * String Comparison

//? let str1 = 'Apple'
//? let str2 = 'Apple'

//? console.log(str1.localeCompare(str2))

//? console.log(str.includes('Become'));
//!_______________________________________________________

//* Split and Join

console.log(str.split(" "))

let arr = ['apple', 'banana']
console.log(arr.join(' and '))
//!_______________________________________________________
