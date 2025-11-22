module.exports = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.render("addStudent", {
      error: "Name and Email are required!",
    });
  }

  next();
};
