//when this code is added to any route, users will have to sign in first to view the page

module.exports ={
    ensureAuthicated: function(req, res, next){
        if(req.isAuthenticated()) {
            return next();
        }
        req.flash("error_msg", "please login to view ");
    res.redirect("/users/login");
    }
    
}