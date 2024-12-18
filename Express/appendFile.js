const fs = require('fs')

fs.appendFile('even.txt',"Hello",(error)=>{
    if(error){
        console.log(error)
    }
    console.log("APPENDED")
})