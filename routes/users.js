const express = require("express");
const router = express.Router();

//SignIn Page
router.get("/login", (req, res)=> res.render("Login"));


//Register Page
router.get("/register", (req, res)=> res.render("register"));

// Register Handle
router.post("/register",(req, res)=>{
    console.log(req.body)
    res.send("hello eveyone");
});


module.exports = router;