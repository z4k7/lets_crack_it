// const a=[1,2,3,4,5]
// const [x,,,,y]=a
// console.log(x)
// console.log(y)
// -----------------------------------------------------------------------------------------------------------

// const person={
//     firstname:'Sachin',
//     age:26
// }
// const {age,firstname}=person;
// console.log(firstname);
// console.log(age);
// -----------------------------------------------------------------------------------------------------------

// const alphabets={
//     "":1,
//     b:2
// }
// console.log(alphabets[""]);
// -----------------------------------------------------------------------------------------------------------

// const greet="Hi",wish="How are you?"
// console.log(`${greet} Sachin, ${wish}`);
// -----------------------------------------------------------------------------------------------------------


// var x=1;
// {
//     let x=2;
// 	console.log(x);
// }
// console.log(x);
// -----------------------------------------------------------------------------------------------------------


// const favouriteanimal = "cat";
// switch (favouriteanimal) {
//   case "kangaroo":
//     console.log("got kangarooo");
//     break;
//   case "cat":
//     console.log("got cat");
//     break;
//   case "dog":
//     console.log("got dog");
//     break;
//   default:
//     console.log("nothing");
// }


// -----------------------------------------------------------------------------------------------------------



// try {
//     console.log("hiiiiiiiiiiii");
//     asfg
// } catch (err) {
//     console.log("error");
// }finally{
//     console.log("gjdfgdjng");
// }
// console.log("end");

// -----------------------------------------------------------------------------------------------------------


// var arr=[1,2,5,4,6]
// var target=5;
// for(let i=0;i<arr.length;i++){
// if(arr[i]==target)
// 	break;
// 	console.log(arr[i]);
// }
// -----------------------------------------------------------------------------------------------------------

// const person={
//     name:"sundar",
//     age:33,
//     city:"pmna"
// };

//  for(let ele in person){
//     console.log( ele + ":" + person[ele]);
//  }
// -----------------------------------------------------------------------------------------------------------


// const myArray = [10, 20, 30];

// for (let index in myArray) {
//   console.log(index);
//   console.log(myArray[index]);
// }
// -----------------------------------------------------------------------------------------------------------

// const myArray = [10, 20, 30];

// for (let value in myArray) {
//   console.log(value);
//   console.log(myArray[value]);
// }

// -----------------------------------------------------------------------------------------------------------

// console.log("i"+1)
// console.log("6"+2)
// console.log("i"-1)
// console.log("i"+1+1)
// console.log("1"+1+1)
// console.log(1+"1"+1)
// console.log(1+"1"*1)
// console.log("6"*2)
// console.log("6"+2)
// console.log("6"-2)
// console.log(2-"i")
// console.log("1"*1)
// -----------------------------------------------------------------------------------------------------------


// console.log("start");

// setTimeout(() => {
//     console.log("Hi");
// },3000);

// let promise = new Promise(function (resolve, reject) {
// 	const x = "geeksforgeeks";
// 	const y = "geeksforgeeks"
// 	if (x === y) {
// 		resolve();
// 	} else {
// 		reject();
// 	}
// });

// promise.
// 	then(function () {
// 		console.log('Success, You are a GEEK');
// 	}).
// 	catch(function () {
// 		console.log('Some error has occurred');
// 	});

// console.log('helloooo');

//     setTimeout(() => {
//         console.log("last");
//     }, 2000);

//     console.log("Bye");
// -----------------------------------------------------------------------------------------------------------


// let a=new Promise ((resolve,reject)=>{
// setTimeout(()=>{
// console.log("2 seconds passed");
// },2000)

//     var x=5;
//     var y=54;
//     if(x==y){
//         resolve("resolved")
//     }else{
//         reject("rejected")
//     }
// })

// a.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

// -----------------------------------------------------------------------------------------------------------


// function *generator(){
// yield 'hello1'
// yield 'hello2'
// yield 'hello3'
// yield 'hello4'
// }

// let g= generator()

// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);

// -----------------------------------------------------------------------------------------------------------


// iife
// (function greet(){

// console.log("Wazzup Nigga!");

// })()
// -----------------------------------------------------------------------------------------------------------

// currying function

// function calculate(l){
//     return function(b){
// 		return function(h){
// 			return l*b*h
// 		}
// 	}
// }
//   console.log(calculate(2)(3)(4));
// -----------------------------------------------------------------------------------------------------------

// factory function

// function createPerson(name,age,profession){
// 	person = {
// 		name: name,
// 		age: age,
// 		profession: profession,

// 		displayInfo: ()=>{
// 			console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm a ${profession} `)
// 		}
// 	}
// 	return person
// }
// const user1 = createPerson('Sachin',26,'Software_Engineer')

// user1.displayInfo()

// -----------------------------------------------------------------------------------------------------------

// function* multipleGenerator(num){
// let multiple = 1
// while(true){
// 	yield num * multiple
// 	multiple++
// }
// }

// let result = multipleGenerator(5)
// for(let i = 0; i<10; i++){
// 	console.log(result.next().value)
// }
// -----------------------------------------------------------------------------------------------------------


// let a=[1,2,3]
// let b=[4,5,6]

// let c=[...a,...b]

// let sum=c.reduce((acc,curr)=>{
//  return acc+curr
// },0)
// console.log(sum);

// -----------------------------------------------------------------------------------------------------------


// let arr=[1,[2,3,[4]]]

// let newarr=arr.flat(Infinity)
// let sum=newarr.reduce((acc,curr)=> curr+acc,0)
// console.log(newarr);
// console.log(sum);

// -----------------------------------------------------------------------------------------------------------




// rest parameter 

// function sum(...s){
// let total=0;
// for(let i of s){
//     total=total+i
// }
// return total
// }
// console.log(sum(1,2,3,4,5,6))
// -----------------------------------------------------------------------------------------------------------

// closure

// function a(){
// var name="zak"
//     function b(){
//         console.log(name);
//     }
//     b()
// }
// a()

// -----------------------------------------------------------------------------------------------------------

//  call back

// function performOperation(x,y,callBack){
// 	const result =  callBack(x,y)
// 	console.log(`Result: ${result}`)
// }

// function add(a,b){
// 	return a + b
// }

// function multiply(p,q){
// 	return p * q
// }

// performOperation(5,5,add)
// performOperation(6,6,multiply)
// -----------------------------------------------------------------------------------------------------------

// let a={ab:{as:14,al:20,ad:30},ar:[4,6,8,9],af:90}

// console.log(a.ab.as-a.ar[0]);

// -----------------------------------------------------------------------------------------------------------



// const a = [{d:54,ld:45},{aa:4,lod:45},{df:8,add:9},{fg:50,a:90}]

// const diff = a.map((ele)=>{
// 	let key = Object.keys(ele)
// 	return Math.abs(ele[key[0]]-ele[key[1]])
// })
// console.log(diff)

// -----------------------------------------------------------------------------------------------------------

// function exampleFunction() {
//     if (true) {
//       var functionScopedVar = "I am function-scoped!";
//     }
//     console.log(functionScopedVar); // Accessible within the function
//   }

//    exampleFunction();

// -----------------------------------------------------------------------------------------------------------

// function exampleFunction() {
//     if (true) {
//       let blockScopedVar = "I am block-scoped!";
//       const anotherBlockScopedVar = "I am also block-scoped!";
      
//   console.log(blockScopedVar); // Error: blockScopedVar is not defined outside the block
//   console.log(anotherBlockScopedVar);
//     }
//    // Error: anotherBlockScopedVar is not defined outside the block
//   }
  
//   exampleFunction();
  
// -----------------------------------------------------------------------------------------------------------
