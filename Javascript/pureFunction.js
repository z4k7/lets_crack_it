// A pure function is a function that, given the same input, will always return the same output and
// has no side effects. A side effect is any state change that is observable outside the function,
//  such as modifying a variable outside the function or modifying a data structure. Pure functions
//   are deterministic and make it easier to reason about code, test, and understand.

// Pure function
function add(a, b) {
  return a + b;
}

var result1 = add(3, 4);
var result2 = add(3, 4);
console.log(result1);
console.log(result2);

// Impure Function with side effect

var total = 0;

var result3 = addToTotal(10);
var result4 = addToTotal(5);
console.log(result3);
console.log(result4);

function addToTotal(value) {
  total += value;
  return total;
}
// In this case, the addToTotal function has a side effect: it modifies the external variable total.
// The result depends not only on the inputs but also on the current state of the external variable.
// This makes the function impure and harder to reason about.

// Pure functions are advantageous in functional programming paradigms because they facilitate easier
// testing, debugging, and reasoning about code. They are often used in combination with immutable data
// structures to ensure that functions don't modify state.
