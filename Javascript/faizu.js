// function one(){
//     console.log("One")
// }

const { log } = require("console")

// function two(one){
//     one()
// }


// function three(two){
//     two(one)
// }

// three(two)


// function one(a){
//     return function two(b){
//         return function three(c){
//             return a+b+c
//         }
//     }
// }

// console.log(one(1)(2)(3));


// const sum = function(a){
//     return function(b){
//         if(b){
//             return sum(a+b)
//         }else{
//             return a
//         }
//     }
// }

// console.log(sum(1)(2)(3)(4)(5)());

// const arr = [{
//     name:"Faizu",
//     Salary:60000
// },{
//     name:"Anwar",
//     salary:55000
// },
// {
//     name:"Sachin",
//     salary:50000
// }
// ]

// const incSalary= arr.map((x)=>{
//     if(x.name==="Anwar" && x.salary === 55000){
//      x.salary = 70000
//     }
//     return x
// })

// console.log(incSalary);

// function* multipleGenerator(base){
//     let multiple = 1
//     while(true){
//         yield base * multiple
//         multiple++
//     }
// }

// let result = multipleGenerator(5)

// for(let i =1; i<10; i++){
//     console.log(result.next().value)
// }

// function* gen(){

    
//         yield 1;
//     yield 2;
//     yield 3;

    
// }
// let a = gen()
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());

// let arr = [1,3,4,5,6,7]

// let [a,b,c,d,e,f]= arr

// console.log(a)

// let obj={a:"a",b:"b",c:"c",d:"d"}

// let {a}=obj
// console.log(c);

// let a =[{
//     name:"Faizu",
//     age:23

// },{a:10}]

// let b = JSON.parse(JSON.stringify(a))
// console.log(b[1].a=5);

// b.name="sachin"

// console.log(b)
// console.log(a)
// console.log(a[1].a)

// const a = {
//     name:"Faizu",
//     maritalStatus:"single"
// }

// const b = {
//     name:"Sachin",
//     maritalStatus:"Married"
// }

// let printInfo =function(place){
//     console.log(`Hello, I'm ${this.name} and I'm ${this.maritalStatus} I'm from ${place}`)
// }

// let c =printInfo.bind(b,"Alanallur")

// c()


const fs = require("fs")

const content = "Hello"
const path = 'Users\dell\Desktop\Brocamp\QA\lets crack it'

fs.unlink(path,(err)=>{
    if(err){
        console.error('Error',err)
    }else{
        console.log('File Created')
    }
})

