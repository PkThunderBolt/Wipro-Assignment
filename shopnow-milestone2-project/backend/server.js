const express = require("express");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 4000;
// In a real application this secret should be stored in environment variables.
const JWT_SECRET = "shopnow_demo_secret";

// This middleware parses JSON bodies so that we can read req.body safely.
app.use(express.json());
// This middleware allows the React app on a different port to call this API without issues.
app.use(cors());

// This middleware runs for every request and logs the HTTP method and URL.
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// This simple in memory array acts as our product database.
const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Headphones", price: 3000 },
  { id: 3, name: "Smartphone", price: 25000 },
];

// This array is used to provide sample user details for the /users/:id route.
const users = [
  { id: 1, name: "Admin User", email: "admin@test.com" },
  { id: 2, name: "Demo User", email: "demo@test.com" },
];

// This endpoint returns all products as JSON.
app.get("/products", (req, res) => {
  res.json(products);
});

// This endpoint handles product creation with validation rules from express-validator.
app.post(
  "/products",
  [
    body("name").trim().notEmpty().withMessage("Product name is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price should be a positive number"),
  ],
  (req, res) => {
    const errors = validationResult(req);

    // If there are validation errors we return them with a 400 status code.
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, price } = req.body;
    const newProduct = {
      id: products.length + 1,
      name,
      price: Number(price),
    };
    products.push(newProduct);

    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  }
);

// This endpoint returns details for a single user based on the id parameter.
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// This route implements a simple login that issues a JWT token for a static user.
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // In this mock app we check the email and password against fixed values.
  if (email === "admin@test.com" && password === "12345") {
    const payload = { email };
    // This token includes the email and expires in one hour.
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    return res.json({ message: "Login successful", token });
  }

  res.status(401).json({ message: "Invalid email or password" });
});

// This middleware checks for a valid JWT token before allowing access to protected routes.
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  // This checks that the header is present and follows the Bearer token convention.
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Authorization header missing or invalid" });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // If verification succeeds we store the decoded payload on the request object.
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

// This protected route can only be accessed when a valid JWT token is provided.
app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to the protected dashboard",
    user: req.user,
  });
});

// This route is only here to confirm that the server is running.
app.get("/", (req, res) => {
  res.json({ status: "running", message: "ShopNow backend is running" });
});

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});
