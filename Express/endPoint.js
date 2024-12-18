const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to handle root path '/'
app.use('/', (req, res, next) => {
  console.log(`Request Type: ${req.method}, Request URL: ${req.url}`);
  next();
});

// Route to handle login POST request
app.post("/login", (req, res) => {
  try {
    console.log(req.body);
    // Example condition, uncomment and modify as needed
    // if(req.body.salonId){
    //     return res.status(200).json("Successfully Booked!")
    // }
    res.status(200).json("Login data received");
  } catch (error) {
    return res.status(500).json("Something went wrong");
  }
});

// Start the server
app.listen(5500, () => console.log("Connected to express on port 5500"));

console.log("hello");
