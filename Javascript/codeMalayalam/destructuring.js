// DESTRUCTURING

const obj1 = {
    name:"Sachin Kizhakkepurath",
    age:"26",
    profession:"Software Engineer"
}

function details(){

const{name,age,profession}= obj1

console.log(name,age,profession);

}

details()