// Set

// let arr = [12,23,42,43,23]

// let mySet = new Set(arr)

// mySet.add('16')
// mySet.add({name:'z4k'})

// console.log(mySet)

// --------------------------------------------------------------------------------------------------------------------------

// Map

// let arr = [['a1','Hello'],['b1','Bye']]
// let myMap = new Map (arr)

// myMap.set('c3','GoodBye')

// myMap.forEach(function(key,val){
//     console.log(val,key);
// })

// console.log(myMap);

// --------------------------------------------------------------------------------------------------------------------------


// Weakset

// let carWeakSet = new WeakSet()
// let car1 = {
//     make: "Honda",
//     model: "Elevate"
// }
// carWeakSet.add(car1)

// let car2 = {
//     make:"Mahindra",
//     model: " Thar"
// }
// carWeakSet.add(car2)
// console.log(carWeakSet);

// --------------------------------------------------------------------------------------------------------------------------


// // WeakMap

// let carWeakMap = new WeakMap()

// let key1 = {
//     id:1
// }

// let car3 = {
//     make: "Suzuki",
//     model: "Jimny"
// }

// carWeakMap.set(key1,car3)

// let key2 = {
//     id:2
// }

// let car4 = {
//     make: "Mitsubishi",
//     model: "Pajero"
// }

// carWeakMap.set(key2,car4)

// console.log(carWeakMap);

// --------------------------------------------------------------------------------------------------------------------------


// let i = 10
// setTimeout(function() {
//   console.log(i,"1000");
//   i = 5
// }, 1000);

// setTimeout(function() {
//   console.log(i,"2000");
// }, 2000);

// i = 200

// console.log(i,"outside")


(function hi(){
    console.log("hi")
})()
