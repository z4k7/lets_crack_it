function recursiveFibonacci(n){
    if(n<2){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

// console.log(recursiveFibonacci(0))
// console.log(recursiveFibonacci(1))
// console.log(recursiveFibonacci(6))
// ---------------------------------------------------------------------------------------------

function fib100() {
  let fibArr = [0, 1];

  function addFib() {
    let nextFib = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];

    if (nextFib < 100) {
      fibArr.push(nextFib);
      addFib();
    }
  }
  addFib();
  return fibArr;
}

console.log(fib100());

//? ------------------------------------------------------------------------------------------------------

// function fibonacci(n, fib = [0, 1]) {
//   if (n <= 2) {
//     return fib.slice(0, n);
//   }

//   if (fib.length < n) {
//     fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//     return fibonacci(n, fib);
//   }

//   return fib;
// }

// console.log(fibonacci(100));
//? ------------------------------------------------------------------------------------------------------

// * Using Generator function

function* fibGenerator() {
  let n1 = 0;
  let n2 = 1;

  while (true) {
    yield n1;
    let n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
}

let result = fibGenerator();

for (let i = 1; i <= 100; i++) {
  console.log(result.next().value);
}
