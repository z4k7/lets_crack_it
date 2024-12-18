
const fs = require('fs')

let arr = [ 1,2,3,4,5,6,7,8,9,10]

const odd = arr.filter((x)=>x%2==1)

const data = odd.toString()

fs.writeFile('even.txt',data,(error)=>{
    if(error) throw error
    console.log("Data written successfully")
})