const passport = require("passport");

exports.loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.render("login", { error: "Invalid username or password" });
    }

    req.logIn(user, (err) => {
      if (err) return next(err);

      // Redirect based on role
      if (user.role === "admin") {
        return res.redirect("/admin");
      } else {
        return res.redirect("/dashboard");
      }
    });
  })(req, res, next);
};
