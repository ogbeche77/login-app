const express = require("express");
const router = express.Router();

//SignIn Page
router.get("/login", (req, res)=> res.send("Login"));


//Register Page
router.get("/register", (req, res)=> res.send("register"));

module.exports = router;