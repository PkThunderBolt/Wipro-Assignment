// server.js
const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json()); // to accept JSON body
app.use("/api", routes);

const PORT = 5000;
app.listen(PORT, () =>
  console.log(` Server running at http://localhost:${PORT}`)
);
