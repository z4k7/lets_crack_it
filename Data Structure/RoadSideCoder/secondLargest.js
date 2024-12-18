// * Brute Force

// const secondLargest = (arr) => {
//   const unique = Array.from(new Set(arr));
//   unique.sort((a, b) => b - a);

//   return unique[1];
// };

// const arr = [32, 45, 34, 76, 45, 23, 54];

// const result = secondLargest(arr);
// console.log(result);

// ?_____________________________________________________________

// * Optimised approach

const secondLargest = (arr) => {
  let largest = -1;
  let secondLargest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

const arr = [32, 45, 34, 76, 45, 23, 54];

const result = secondLargest(arr);
console.log(result);
