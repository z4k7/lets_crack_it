const express = require("express");
const app = express();
const Token = require("./middleware/Token");
const Validation = require("./middleware/Validations");
const { log } = require("console");



app.use(DateGenerator)

const middleware = [Token,Validation]


app.get("/profile", middleware, (req, res) => {
  console.log("User Logged");
  res.send("<h1>Success</h1>");
});

app.get("/",  (req, res) => {
    console.log("Default url");
    res.send("<h1>Home</h1>");
  });

function DateGenerator(req,res,next){
    log(new Date())
    next()
}

const PORT = process.env.PORT || 3001;

app.listen(PORT);
