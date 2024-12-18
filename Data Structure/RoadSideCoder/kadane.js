// * LArgest Sum Subarray

// *Brute Force

// const maxSubArraySum = (nums) => {
//   let maxSum = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     let currentSum = 0;
//     for (let j = i; j < nums.length; j++) {
//       currentSum += nums[j];
//       maxSum = Math.max(currentSum, maxSum);
//     }
//   }
//   return maxSum;
// };

// const arr = [-2, 1, -2, 4, -1, 2, 1, -5, 4];
// const result = maxSubArraySum(arr);
// console.log(result);

//? _________________________________________________________

// const maxSubArray = (nums) => {
//     let maxSum = nums[0]
//     let startIdx = 0
//     let endIdx = 0

//     for (let i = 0; i < nums.length; i++){
//         let currentSum = 0
//         for (let j = i; j < nums.length; j++){
//             currentSum += nums[j]
//             if (currentSum > maxSum) {
//                 maxSum = currentSum
//                 startIdx = i
//                 endIdx = j
//             }
//         }
//     }
//      return nums.slice(startIdx,endIdx+1)
//  }

// const arr = [-2, 1, -2, 4, -1, 2, 1, -5, 4];
// const result = maxSubArray(arr);
// console.log(result);

// ? _________________________________________________________

// * Kadane's Algorithm

const maxSubArraySum = (nums) => {
  let sum = 0;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxSum = Math.max(sum, maxSum);
    sum = sum < 0 ? 0 : sum;
  }
  return maxSum;
};

const arr = [-2, 1, -2, 4, -1, 2, 1, -5, 4];
const result = maxSubArraySum(arr);
console.log(result);
