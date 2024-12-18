// const multiply = (arr) => {
//     if (arr.length <= 0) return 1

//     return arr[arr.length-1] * multiply(arr.slice(0,arr.length-1))
// }

// console.log(multiply([1,2,3,4]));
// ?__________________________________________________________________________

// *Factorial

// const factorial = (n) => {
//     if (n == 0) {
//         return 1
//     }

//     return n * factorial (n-1)
// }

// console.log(factorial(5));

// ?__________________________________________________________________________
// *Range of Numbers

// const rangeOfNumbers = (startNum, endNum) => {
//   if (endNum < startNum) {
//     return [];
//   }

//   const numbers = rangeOfNumbers(startNum, endNum - 1);
//   numbers.push(endNum);
//   return numbers;
// };

// console.log(rangeOfNumbers(1, 5));

// ?__________________________________________________________________________

// *Fibonacci

// const fibonacci = (n) => {
//   if (n <=1 ) return n;

//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// console.log(fibonacci(3));

// ?__________________________________________________________________________

// *Reverse String

// function reverse(str) {
//   if (str === "") return "";
//   return reverse(str.substr(1)) + str.charAt(0);
// }

// console.log(reverse("hello"));

// ?__________________________________________________________________________

// *Subsets
// ! Back tracking

function subSets(nums) {
  let temp = [];
  let result = [];

  function recurse(nums, i) {
    if (i === nums.length) {
      return result.push([...temp]);
    }

    temp.push(nums[i]);
    recurse(nums, i + 1);
    temp.pop();
    recurse(nums, i + 1);
  }

  recurse(nums, 0);

  return result;
}

console.log(subSets([1,2,3]))
