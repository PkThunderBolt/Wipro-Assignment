const express = require("express");
const app = express();

// parse JSON request body
app.use(express.json());

// import routes
const routes = require("./routes");

// use routes
app.use("/", routes);

const PORT = 5000; // you can change port if you want

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
