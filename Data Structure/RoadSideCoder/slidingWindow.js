// *SLIDING WINDOW

// ?Brute Force

const maxSlidingWindowNaive = (nums, k) => {
  const result = [];
  const n = nums.length;

  for (let i = 0; i <= n - k; i++) {
    let max = nums[i];
    for (let j = 1; j < k; j++) {
      if (nums[i + j] > max) {
        max = nums[i + j];
      }
    }
    result.push(max);
  }
  return result;
};

// const arr = [1, 3, -1, -3, 5, 3, 6, 7]

// const result = maxSlidingWindowNaive(arr, 3)

// console.log(result)

// ?____________________________________________________________________________

// * Optimised Solution

// const slidingWindow = (nums, k) => {
//   let result = [];
//   let dequeu = [];

//   for (let i = 0; i < nums.length; i++) {
//     let dqLast = dequeu[dequeu.length - 1];
//     if (dequeu.length && dequeu[0] <= i - k) {
//       dequeu.shift();
//     }

//     while (dequeu.length && nums[dqLast] < nums[i]) {
//       dequeu.pop();
//     }
//     dequeu.push(i);

//     if (i >= k - 1) {
//       result.push(nums[dequeu[0]]);
//     }
//   }

//   return result;
// };

// const arr = [1, 3, -1, -3, 5, 3, 6, 7];

// const result = slidingWindow(arr, 3);

// console.log(result);

// ?____________________________________________________________________________

// * Simple Solution

// const slidingWindow = (nums, k) => {
//   let result = [];

//   for (let i = 0; i < nums.length - k; i++) {
//     result.push(Math.max(...nums.slice(i, k + i)));
//   }
//   return result;
// };

// const arr = [1, 3, -1, -3, 5, 3, 6, 7];

// const result = slidingWindow(arr, 3);

// console.log(result);
// ?____________________________________________________________________________



// const slidingWindow = (nums, k) => {
//     const result = [];
//     const queue = [];
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         while (queue.length && nums[queue[queue.length - 1]] <= num) {
//             queue.pop();
//         }
//         queue.push(i);
//         if (i - queue[0] >= k) {
//             queue.shift();
//         }
//         if (i >= k - 1) {
//             result.push(nums[queue[0]]);
//         }
//     }
//     return result;
// };

// const arr = [1, 3, -1, -3, 5, 3, 6, 7];

// const result = slidingWindow(arr, 3);

// console.log(result);

// ?____________________________________________________________________________

// function printPyramid(rows) {
//     for (let i = 1; i <= rows; i++) {
//       let str = '';
  
//       // Print spaces
//       for (let j = 1; j <= rows - i; j++) {
//         str += ' ';
//       }
  
//       // Print stars
//       for (let k = 0; k < 2 * i - 1; k++) {
//         str += '*';
//       }
  
//       console.log(str);
//     }
//   }
  
//   printPyramid(5);

// ?____________________________________________________________________________


  