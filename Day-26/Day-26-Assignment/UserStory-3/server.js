// server.js
require("dotenv").config();
const express = require("express");
const app = express();
const { sequelize } = require("./models");
const instructorRoutes = require("./routes/instructorRoutes");

app.use(express.json());
app.use("/", instructorRoutes);

// Sync DB then start server
sequelize.sync({ force: true }).then(() => {
  console.log(" Database synced (force)");
  app.listen(process.env.PORT, () => {
    console.log(` Server running at http://localhost:${process.env.PORT}`);
  });
});
