let userDetails={
    Name:"Sachin",
    Designation:"Software Engineer",
    Marital_Status:"Single"
}

let shallowCopy = userDetails

shallowCopy.Marital_Status="Married"

console.log("Shallow:",userDetails.Marital_Status);
console.log("Shallow:",shallowCopy.Marital_Status);

let deepCopy= JSON.parse(JSON.stringify(userDetails))

deepCopy.Marital_Status="Single"
console.log("Deep:",deepCopy.Marital_Status)
console.log("Deep:",userDetails.Marital_Status);
