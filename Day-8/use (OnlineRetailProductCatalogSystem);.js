use (OnlineRetailProductCatalogSystem);

db.products.insertOne({
  name: "Samsung Galaxy S23",
  category: "Electronics",
  price: 69999,
  stock: 150,
  description: "Latest Samsung flagship smartphone",
  attributes: { brand: "Samsung", memory: "8GB", storage: "256GB" },
  createdAt: new Date(),
  updatedAt: new Date()
});
{
  acknowledged: true,
  insertedId: ObjectId('690db5001bc16f030171ad80')
}
db.products.insertOne({
  name: "Men's Denim Jeans",
  category: "Clothing",
  price: 1299,
  stock: 500,
  description: "Slim fit stretchable denim",
  attributes: { size: "L", color: "Navy Blue", material: "Cotton" },
  createdAt: new Date(),
  updatedAt: new Date()
});
{
  acknowledged: true,
  insertedId: ObjectId('690db50f1bc16f030171ad81')
}
db.users.insertOne({
  username: "prashant_k",
  email: "prashant@example.com",
  passwordHash: "pass", // Replace with bcrypt hash when implementing auth
  createdAt: new Date()
});
{
  acknowledged: true,
  insertedId: ObjectId('690db54a1bc16f030171ad82')
}
db.users.insertOne({
  username: "john_doe",
  email: "john@example.com",
  passwordHash: "pass",
  createdAt: new Date()
});
{
  acknowledged: true,
  insertedId: ObjectId('690db55e1bc16f030171ad83')
}
db.products.find().pretty();
{
  _id: ObjectId('690db5001bc16f030171ad80'),
  name: 'Samsung Galaxy S23',
  category: 'Electronics',
  price: 69999,
  stock: 150,
  description: 'Latest Samsung flagship smartphone',
  attributes: {
    brand: 'Samsung',
    memory: '8GB',
    storage: '256GB'
  },
  createdAt: 2025-11-07T08:59:44.833Z,
  updatedAt: 2025-11-07T08:59:44.833Z
}
{
  _id: ObjectId('690db50f1bc16f030171ad81'),
  name: "Men's Denim Jeans",
  category: 'Clothing',
  price: 1299,
  stock: 500,
  description: 'Slim fit stretchable denim',
  attributes: {
    size: 'L',
    color: 'Navy Blue',
    material: 'Cotton'
  },
  createdAt: 2025-11-07T08:59:59.431Z,
  updatedAt: 2025-11-07T08:59:59.431Z
}
db.users.find().pretty();
{
  _id: ObjectId('690db54a1bc16f030171ad82'),
  username: 'prashant_k',
  email: 'prashant@example.com',
  passwordHash: 'pass',
  createdAt: 2025-11-07T09:00:58.469Z
}
{
  _id: ObjectId('690db55e1bc16f030171ad83'),
  username: 'john_doe',
  email: 'john@example.com',
  passwordHash: 'pass',
  createdAt: 2025-11-07T09:01:18.567Z
}
db.orders.insertOne({
  userId: ObjectId("690db54a1bc16f030171ad82"),
  orderDate: new Date(),
  status: "Delivered",
  products: [
    {
      productId: ObjectId("690db5001bc16f030171ad80"),
      quantity: 1,
      price: 69999
    },
    {
      productId: ObjectId("690db50f1bc16f030171ad81"),
      quantity: 2,
      price: 1299
    }
  ],
  totalAmount: 69999 + (2 * 1299)
});
{
  acknowledged: true,
  insertedId: ObjectId('690db63e1bc16f030171ad84')
}
db.products.createIndex({ category: 1 });
category_1
db.products.createIndex({ name: 1 });
name_1
db.orders.createIndex({ userId: 1, orderDate: -1 });
userId_1_orderDate_-1
db.users.createIndex({ email: 1 });
email_1
db.products.find({ category: "Electronics" });
{
  _id: ObjectId('690db5001bc16f030171ad80'),
  name: 'Samsung Galaxy S23',
  category: 'Electronics',
  price: 69999,
  stock: 150,
  description: 'Latest Samsung flagship smartphone',
  attributes: {
    brand: 'Samsung',
    memory: '8GB',
    storage: '256GB'
  },
  createdAt: 2025-11-07T08:59:44.833Z,
  updatedAt: 2025-11-07T08:59:44.833Z
}
db.orders.find({ userId: ObjectId("690db5001bc16f030171ad80") }).sort({ orderDate: -1 });
db.orders.aggregate([
  { $group: { _id: null, totalSales: { $sum: "$totalAmount" } } }
]);
{
  _id: null,
  totalSales: 72597
}
db.orders.find().pretty();
{
  _id: ObjectId('690db63e1bc16f030171ad84'),
  userId: ObjectId('690db54a1bc16f030171ad82'),
  orderDate: 2025-11-07T09:05:02.759Z,
  status: 'Delivered',
  products: [
    {
      productId: ObjectId('690db5001bc16f030171ad80'),
      quantity: 1,
      price: 69999
    },
    {
      productId: ObjectId('690db50f1bc16f030171ad81'),
      quantity: 2,
      price: 1299
    }
  ],
  totalAmount: 72597
}
db.orders.find({ userId: ObjectId("690db54a1bc16f030171ad82") }).pretty();
