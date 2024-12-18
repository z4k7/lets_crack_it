//* inbuilt loops

let nums = [1, 2, 3, 4, 5];

//* map
const map = nums.map((item, index, arr) => {
  return item * 2;
});
// console.log(map);
//? _____________________________________________________________________________________________

//* filter

const filter = nums.filter((item, index, arr) => {
  return item > 3;
});
// console.log(filter);
//? _____________________________________________________________________________________________

//* reduce

const reduce = nums.reduce((acc, curr, index, arr) => {
  return acc + curr;
}, 0);
// console.log(reduce);
//? _____________________________________________________________________________________________

//* some

const some = nums.some((item, index, arr) => {
  return item > 3;
});
// console.log(some);
//? _____________________________________________________________________________________________

//* every

const every = nums.every((item, index, arr) => {
  return item > 3;
});
// console.log(every);
//? _____________________________________________________________________________________________

//* find

const find = nums.find((item, index, arr) => {
  return item > 3;
});

// console.log(find);
//? _____________________________________________________________________________________________

//* findIndex

const arr3 = [1, 2, 3, 4, 5, 6, 7];
const index = arr3.findIndex((item) => item === 4);
// console.log(index)

//? _____________________________________________________________________________________________

//* Spread & Rest

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const spread = [...arr1, ...arr2];

// console.log(spread)
//? _____________________________________________________________________________________________

//* Rest

function rest(...numbers) {
  return numbers;
}

// console.log(rest(`Hello`,arr1,arr2,7));

//? _____________________________________________________________________________________________

//* Concat

const concat = arr1.concat(arr2);
// console.log(concat)

//? _____________________________________________________________________________________________

//* Slice

const fruits = ["apple", "banana", "cherry"];

const slice = fruits.slice(0, 2);
// console.log(slice)

//? _____________________________________________________________________________________________

//* Splice

const splice = fruits.splice(1, 2, "orange");
// console.log(fruits)
// console.log(splice)
//? _____________________________________________________________________________________________

//* Fill

const dummy = [2, 3, 45, 5, 6, 7];
dummy.fill(2, 2);
// console.log(dummy)
//? _____________________________________________________________________________________________

//* Flat

const nest = [1, [2, 3], [[4, 5], 6]];
const flat = nest.flat(2);
console.log(flat)

//? _____________________________________________________________________________________________

//* Reverse

const numsr = [1, 2, 3];
const reverse = numsr.reverse();
// console.log(reverse)
//? _____________________________________________________________________________________________

//* Sort

const unsorted = [5, 3, 4, 1, 2];

const sort = unsorted.sort((a, b) => a - b);
// console.log(sort);
