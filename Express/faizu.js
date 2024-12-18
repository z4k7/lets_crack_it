// let digit = [1,2,3,4]
// let words = [ 'one','two','three','four']
// let result = []
// for(let i=0; i<digit.length;i++){
// result.push(digit[i],words[i])
// }
// console.log(result)
// -----------------------------------------------------------------------------------------------------------

// let arr = [43,3,455,2,52,5,45234,5]

// let firstLargest=0
// let secondLargest = 0

// for(let i =0; i<arr.length; i++){
//     if(arr[i]>firstLargest){
//         secondLargest=firstLargest
//         firstLargest=arr[i]
//     }
// }
// console.log(secondLargest)
// -----------------------------------------------------------------------------------------------------------

// let p1 = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   setTimeout(() => {
//     if (a == 2) {
//       resolve("Success");
//     }
//   }, 3000);
// });

// let p2 = new Promise((resolve, reject) => {
//   let b = 2;
//   setTimeout(() => {
//     if (b == 2) {
//       reject("Failed");
//     }
//   }, 2000);
// });

// Promise.allSettled([p1, p2])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// -----------------------------------------------------------------------------------------------------------

// Async

// function add(a,b){
//     return new Promise((resolve,reject)=>{
//         resolve(a+b)
//     })
// }

// async function sum(){

//     let result = await add(5,5)
//     console.log(result)

// }
// sum()
// -----------------------------------------------------------------------------------------------------------
// let arr= ['faizu','sachin','anwar']

// function update(newName,name){
//   return  new Promise((resolve,reject)=>{
//     let final = arr.map((x)=>x==name ?x= newName:x)

//     resolve(final)
//         })
// }

// async function output(){

//         let result = await update('Faizu Rahman','faizu')
//         if(result){
//             console.log(result)
//         }

// }

// output()
// -----------------------------------------------------------------------------------------------------------

// let arr = ["faizu6", "sachin3", "anwar2"];

// let sort = arr.sort((a, b) => a[a.length - 1] - b[b.length - 1]);
// let result = sort.map((x) => x.slice(0, -1));
// let final = result.join(" ");
// console.log(final);
// -----------------------------------------------------------------------------------------------------------

// let a ={
//     name : "Faizu"
// }

// function deepClone(obj){
// let clonedObj= JSON.parse(JSON.stringify(obj))
// clonedObj.name="Sachin"
// return clonedObj
// }

// console.log(deepClone(a))
// console.log(a);
// -----------------------------------------------------------------------------------------------------------

// function * multiple(value){
//     let multiplier = 1
//     while(true){
//         yield value * multiplier
//         multiplier ++
//     }
// }

// let result = multiple(3)

// for(let i =1; i<=10;i++){

//     console.log(result.next().value)
// }
// -----------------------------------------------------------------------------------------------------------

// Sum Of N Numbers

// function summation(n){
//     let sum = 0

//     for(let i =1; i<=n; i++){
//         sum += i
//     }
//     console.log(sum)
// }

// summation(10)
// -----------------------------------------------------------------------------------------------------------
