// * Using Splice

// const rotate = (nums, k) => {
//   let size = nums.length;

//   if (k > size) {
//     k = k % size;
//   }
//   const rotated = nums.splice(size - k, size);
//   nums.unshift(...rotated);

//   return nums;
// };

// let arr = [1, 2, 3, 4, 5, 6, 7]
// let result = rotate(arr, 3)

// console.log(result)

//?______________________________________________________________

// * Optimised Solution

const rotate = (nums, k) => {
  let size = nums.length;
  if (k > size) {
    k = k % size;
  }

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k , nums.length - 1);

  return nums;
};

function reverse(arr, left, right) {
  while (left < right) {
    let temp = arr[left];
    arr[left++] = arr[right];
    arr[right--] = temp;
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let result = rotate(arr, 3);

console.log(result);
