function findKthPositive(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= count + k) {
      count++;
    }
  }
  return count + k;
}

let nums = [2, 3, 4, 7, 11]

console.log(findKthPositive(nums,5));