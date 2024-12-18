const nums = [4, 5, 6, 7, 0, 1, 2];
const linearSearch = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    }
  }
  return -1;
};

// console.log(linearSearch(nums,0));
// console.log(linearSearch(nums,3));
// !_____________________________________________________________________________________________

const globalLinearSearch = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      result.push(i);
    }
  }
  return result.length === 0 ? -1 : result;
};

const arr = [1, 2, 3, 4, 5, 6, 4, 32, , 4, 5, 6, 3, 2];

console.log(globalLinearSearch(arr,3));
