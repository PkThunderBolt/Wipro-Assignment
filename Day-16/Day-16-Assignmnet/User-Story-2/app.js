// app.js
const figlet = require("figlet");
const chalk = require("chalk"); // Chalk v4 works with require()

figlet("Welcome to Node.js", (err, data) => {
  if (err) {
    console.log("Something went wrong...");
    console.error(err);
    return;
  }

  console.log(chalk.cyan(data)); // Works now in CommonJS
});
