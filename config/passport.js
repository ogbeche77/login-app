const LocalStrategy = require("passport-local"). Strategy;
const mongoose = require("mongoose"); // to check if the email/password matches
const bcrypt = require("bcryptjs");

//Load User model
const User = require("../models/User"); // ../ means outside the config folder

module.exports = function(passport){
    passport.use(
        new LocalStrategy({ usernameField: "email" }, (email, password, done)=> {

            // Match user email; determine if there is such email in the database
            User.findOne({ email: email})
            .then(user =>{
                if(!user) {
                    return done (null, false, { message: "This email is not registered"});
                }

            // Match user password
            bcrypt.compare(password, user.password, (err, isMatch)=>{
                if(err) throw err;

                if(isMatch){
                    return done(null, user);
                } else{
                    return done(null, false, {message: "password is wrong"});
                }
            });
            })
            .catch(err => console.log(err));
        })
    );

    // to serialize and deserialize user, so all sections are stored in cookies
    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
      
      passport.deserializeUser((id, done)=> {
        User.findById(id, (err, user) => {
          done(err, user);
        });
      });
}