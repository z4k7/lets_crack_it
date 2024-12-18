// const fs = require('fs')


// function readFilePromise(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile('even.txt','utf-8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// async function readFileAsync(){
//     try{
//         const data = await readFilePromise()
//         console.log('File Content: ', data)
//     }catch(err){
//         console.error('Error reading file: ',err)
//     }
// }

// readFileAsync()
// --------------------------------------------------------------------------------------------------------------

// function promise1(){
//     return new Promise((resolve,reject)=>{
//         let a = 101
//         setTimeout(()=>{
//             if(a%2==0){
//                 resolve('even')
//             }else{
//                 reject('odd')
//             }
//         },3000)
//     })
// }


// function promise2(){
//     return new Promise((resolve,reject)=>{
//          let b = 4
//          setTimeout(()=>{
//             if(b%2==0){
//                 resolve('even')
//             }else{
//                 reject('odd')
//             }
//          },6000)
//     })
// }

// async function showResult(){
//    try{
//     const result = await Promise.all([promise1(),promise2()])
//     console.log(result)
//    }catch(err){
//     console.error(err)
//    }
    
// }

// showResult()

// --------------------------------------------------------------------------------------------------------------
