let arr = [1, 2, 3];
let arr2 = ["one", "two", "three"];

let res = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    res.push(arr[i], arr2[j]);
    i++;
  }
}

// let res = arr.flatMap((num, index) => [num, arr2[index]]);

console.log(res);

// ---------------------------------------------------------------------------------------------------------------

// function p() {
//   return new Promise((res, rej) => {
//     let n = 11;

//     if (n % 2 == 0) {
//       setTimeout(() => {
//         res("Even");
//       }, 2000);
//     } else {
//       setTimeout(() => {
//         rej("Odd");
//       }, 3000);
//     }
//   });
// }

// p()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
