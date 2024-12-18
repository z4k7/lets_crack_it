const EventEmitter = require("events")

const emitter= new EventEmitter()


emitter.on("message",(data)=>{
    console.log(data.text);
})
emitter.on("Logout",(data)=>{
    console.log(data.text);
})

emitter.emit("message",{text:"User Logged"})
emitter.emit("Logout",{text:"User Logged Out"})