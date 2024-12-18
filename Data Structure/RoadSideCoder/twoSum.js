// Brute Force Solutuion

// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// };

// console.log(twoSum([2,7,11,15],9))
// ____________________________________________________________

// Using Objects

const twoSum = (nums, target) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = obj[target - nums[i]];
    if (complement >= 0) {
      return [complement, i];
    } else {
      obj[nums[i]] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
