// let targetObject = {
//     name: "Indira",
//     age: 50
// }

// let handler = {
//     set : function(target,prop,value){
//         if( prop === 'age'){
//             console.log(`Setting ${prop} to ${value}`)
//             target[prop] = value
//             return true
//         }else{
//             return target[prop]
//         }
//     }
// }

// const proxyObject = new Proxy(targetObject,handler)

// console.log(proxyObject.name );

// proxyObject.age = 57

// console.log(proxyObject.age );
// ---------------------------------------------------------------------------------------------------------------


// let a= [[[1,2,],[4,5,6]],[[3,4],[4,7]]]
// let b = []
// let n=0

// let newFunc = function(a){ 
//     for(let val of a){
//         if(typeof val==='number'){
//             b[n]=val
//             n++
//         }else{
//             newFunc(val)
//         }
//     }
// }

// newFunc(a)

// console.log(b);

// ---------------------------------------------------------------------------------------------------------------

// Destructuring

// let qq=[1,4,'anwar'];

// const [a,b,c] = qq

// console.log(a);

// ---------------------------------------------------------------------------------------------------------------

// class NewClass {
//  store
//     constructor(arg){

//         this.store = arg
        
//     }
    
// }

// let obj = new NewClass(5)

// console.log(obj.store)
// ---------------------------------------------------------------------------------------------------------------

// function * generator (a){
    
//     for(let i = 1; i <= 10;){
//         yield i*a
//         i++
//     }  
// }

// let hi = generator(3)

// for(i=1;i<=10;i++){

//     console.log(hi.next().value);
// }
// ---------------------------------------------------------------------------------------------------------------
