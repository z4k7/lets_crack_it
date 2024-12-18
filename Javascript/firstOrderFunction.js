// A first-order function in programming refers to a function that:

// Can be passed as an argument to another function.
// Can be returned as a value from another function.
// Can be assigned to a variable.

// In other words, a first-order function treats functions as first-class citizens,
//  allowing them to be used in a flexible and expressive manner within the programming language.

function applyOperation(x,y,operation){
    return operation(x,y)
}

function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}

var result1 = applyOperation(5,3,add)
var result2 = applyOperation(7,2,subtract)
console.log(result1)
console.log(result2)

// First-order functions are a fundamental concept in functional programming and enable higher-order
// functions, which are functions that take other functions as parameters or return them as results.
// This flexibility is central to building expressive and modular code in functional programming paradigms.