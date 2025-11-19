const express = require("express");
const app = express();
const port = 4000;

// ----------------------------------------------------------
// Home Route
// Just a simple message telling the user where to go next.
// ----------------------------------------------------------
app.get("/", (req, res) => {
  res.send("Go to /products to search for products");
});

// ----------------------------------------------------------
// /products Route
// This route reads the query parameter ?name=
// If the user provides a name → show "Searching for product: X"
// If not → ask the user to provide one
// ----------------------------------------------------------
app.get("/products", (req, res) => {
  const productName = req.query.name; // Extract query value

  // Basic output in plain text
  if (productName) {
    res.send(`Searching for product: ${productName}`);
  } else {
    res.send("Please provide a product name");
  }

  // --------------------------------------------------------
  // Bonus Section (JSON Output)
  // Uncomment this if you want the response in JSON format
  // instead of normal text.
  // --------------------------------------------------------

  /*
  if (productName) {
    res.json({
      message: `Searching for product: ${productName}`,
      query: productName,
    });
  } else {
    res.json({
      message: "Please provide a product name",
      query: null,
    });
  }
  */
});

// ----------------------------------------------------------
// Start the server and listen for requests
// ----------------------------------------------------------
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
