const express = require("express");
const app = express();
const path = require("path");
const port = 4000;

// Built-in middlewares
app.use(express.json()); // JSON body parser
app.use(express.urlencoded({ extended: true })); // Form data parser

// Users route
const usersRoute = require("./routes/users");
app.use("/users", usersRoute);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
