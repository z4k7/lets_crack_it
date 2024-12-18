// let Name1 ={
//     firstName:"Sumi",
//     lastname:"Sachin",
// }

// let Name2 ={
//     firstName:"Sachin",
//     lastname:"Kizhakkepurath"
// }

// let printName= function(hometown,state){
//     console.log(this.firstName+ " " + this.lastname+ " from " + hometown +", " + state)
// }

// // Call
// printName.call(Name1,"Mannarkkad","Kerala")
// // Apply
// printName.apply(Name2,["Palakkad","Kerala"])
// // Bind
// let bindName= printName.bind(Name2,"Palakkad","Kerala")

// bindName()


// let user1 = {
//     name:'Sachin',
//     occupation:"Software Engineer"
// }

// let user2 = { 
//     name:"Sumi",
//     occupation:"Medical Coder"
// }

// let showDetails =function (hometown,state){
//     console.log("Hi I'm " + this.name + ", I'm a " + this.occupation + " from " + hometown + ", " +  state)
// }

// showDetails.call(user1,"Mannarkkad", "Kerala")

// showDetails.apply(user2,["Alanallur","Kerala"])

// let bindFun = showDetails.bind(user1,"Palakkad","Kerala")

// bindFun()


// Polyfill for bind

let user = {
    name:"Indira",
    relation:"Mother",
}

let relativeFunc = function(sname, occupation){
    console.log("Hi, I'm " + this.name + ", I'm " + this.relation+ " of " + sname + " and I'm a " + occupation)
}

Function.prototype.mybind = function (...args){
    let obj = this,
    params = args.slice(1)
    
    return function(...args2){
        obj.apply(args[0],[...params, ...args2])
    }
}

let relation = relativeFunc.bind(user,"Sachin")

relation("Home Maker ")

