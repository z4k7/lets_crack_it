const fs = require('fs')

fs.readFile('even.txt','utf8',(err,data)=>{
    if(err) throw err
    console.log(data)
})