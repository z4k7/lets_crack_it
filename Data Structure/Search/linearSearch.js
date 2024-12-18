function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (target == arr[i]) {
      return i;
    }
  }
  return -1;
}

let arr1 = [1, 2, 34, 53, 34, 24, 52];

console.log(linearSearch(arr1, 53));
console.log(linearSearch(arr1, 5));
console.log(linearSearch(arr1, 34));
