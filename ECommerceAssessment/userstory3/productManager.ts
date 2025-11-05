// -----------------------------------------------
// User Story 3 – Product Management Module
// Using modern (TS 5+) decorators
// -----------------------------------------------

// Interface Definition
interface IProduct {
  id: number;
  name: string;
  category: Category;
  price: number;
  stock: number;
}

// Enum for Product Categories
enum Category {
  Electronics = "Electronics",
  Fashion = "Fashion",
  Grocery = "Grocery",
  Home = "Home",
  Sports = "Sports",
}

// Modern Decorator (TS 5+)
// Accepts a method context rather than descriptor
function LogChange(value: any, context: ClassMethodDecoratorContext) {
  // Get the original method
  const methodName = String(context.name);

  // Return a new function that wraps the original
  return function (this: any, ...args: any[]) {
    const [newValue] = args;
    console.log(
      `LOG: Method "${methodName}" called with value ${newValue} for Product ID ${this.id}`
    );
    return value.apply(this, args);
  };
}

// Product Class implementing IProduct
class Product implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public category: Category,
    public price: number,
    public stock: number
  ) {}

  // Decorators now just reference the function (no parentheses)
  @LogChange
  updatePrice(newPrice: number): void {
    this.price = newPrice;
  }

  @LogChange
  updateStock(newStock: number): void {
    this.stock = newStock;
  }

  display(): void {
    console.log(
      `ID: ${this.id} | ${this.name} | ${this.category} | ₹${this.price} | Stock: ${this.stock}`
    );
  }
}

// Data Storage (Array of Tuples)
const productInventory: [number, Product][] = [];

// Sample Products
const product1 = new Product(1, "Smartphone", Category.Electronics, 15999, 25);
const product2 = new Product(2, "Running Shoes", Category.Fashion, 2999, 50);
const product3 = new Product(3, "LED Bulb", Category.Home, 199, 100);
const product4 = new Product(4, "Cricket Bat", Category.Sports, 1499, 15);
const product5 = new Product(5, "Organic Rice", Category.Grocery, 799, 200);

// Push to inventory
productInventory.push(
  [product1.id, product1],
  [product2.id, product2],
  [product3.id, product3],
  [product4.id, product4],
  [product5.id, product5]
);

// Display all products
console.log("Current Product Inventory:\n");
for (const [, product] of productInventory) {
  product.display();
}

// Demonstrate decorator functionality
console.log("\n Updating product price and stock...\n");
product1.updatePrice(17999);
product3.updateStock(120);

// Display updated inventory
console.log("\n Updated Product Inventory:\n");
for (const [, product] of productInventory) {
  product.display();
}
