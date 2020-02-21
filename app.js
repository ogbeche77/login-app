const express = require("express");
const expressLayouts = require("express-ejs-layouts"); //initialize ejs in app.js
const mongoose = require("mongoose"); //we introduce mongoose

const app = express();

// Database config
const db = require("./config/keys").MongoURI;

// Connect to Mongo
mongoose.connect (db, { useNewUrlParser: true})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));


//EJS
//add middleware
app.use(expressLayouts);
//set view engine to ejs
app.set ("view engine", "ejs");

//Bodyparser
app.use(express.urlencoded({ extended: false}));


//Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`server started on port ${PORT}`));