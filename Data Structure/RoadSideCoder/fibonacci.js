// const fib = (n) => {
//   const arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }

//   return arr[n];
// };

// const result = fib(7);

// console.log(result);
// ________________________________________________________________________________________________

// Recursion

// const fib = (n) => {
//   if (n <= 1) return n;

//   return fib(n - 1) + fib(n - 2);
// };
// ________________________________________________________________________________________________

// One Liner

const fib = (n) => (n <= 1 ? n : fib(n - 2) + fib(n - 1));

console.log(fib(3));
