// Prototypal Inheritance

// Prototypal inheritance is a fundamental concept in JavaScript that describes how objects inherit 
// properties and methods from other objects through a prototype chain. In JavaScript, each object
//  has an internal property called [[Prototype]] (also known as the prototype link), which refers 
//  to another object called its prototype. When you access a property or method on an object, and 
//  that property or method is not found on the object itself, JavaScript looks up the prototype 
//  chain to find it in the prototype of the object.

// Parent constructor function
function Animal(name){
    this.name=name
}

// Adding a method to the prototype of Animal
Animal.prototype.sayHello = function(){
    console.log("Hello, I'm " + this.name + this.breed);
}

// Creating an instance of Animal

var animal = new Animal("Tom")

// Calling the method inherited from  the prototype
animal.sayHello()

// Child constructor function
function Dog(name,breed){
    // Call the parent constructor to initialize properties
    Animal.call(this,name)
    this.breed=breed    
}

// Setting up prototypal Inheritance
Dog.prototype = Object.create(Animal.prototype)

// Adding a method specific to Dog
Dog.prototype.bark = function(){
    console.log("Woof! Woof! " );
}

// Creating an instance of Dog
var dog = new Dog("Rocky", "Golden Retriever")

// Calling methods from both the parent and child
dog.sayHello()
dog.bark()


function Animal(name){
    this.name=name
}

Animal.prototype.sayHello= function(){
    console.log("Hi, I'm " + this.name + "and I'm a  " + this.breed);
}

var animal = new Animal("Jerry")

animal.sayHello()

function Dog(breed,name){
    Animal.call(this,name)
    this.breed= breed
    
}

Dog.prototype= Object.create(Animal.prototype)

var dog = new Dog("Rottweiler", "Chukru")
 
Dog.prototype.bark= function(){
    console.log("Woof! Woof!");
}

dog.sayHello()
dog.bark()