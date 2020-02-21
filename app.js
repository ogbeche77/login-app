const express = require("express");
const expressLayouts = require("express-ejs-layouts"); //initialize ejs in app.js
const app = express();

//add middleware
app.use(expressLayouts);
//set view engine to ejs
app.set ("view engine", "ejs");




//Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`server started on port ${PORT}`));