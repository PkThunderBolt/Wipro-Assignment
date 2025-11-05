# User Story 3 – Product Management Module (TypeScript)

### Scenario

This project implements a **Product Management System** using **TypeScript**, demonstrating **interfaces**, **classes**, **decorators**, and **iterators** to model and manage a small product inventory.

---

## Features

--Defines an **Interface (`IProduct`)** for product structure  
--Implements a **Class (`Product`)** with proper type annotations  
--Uses an **Enum (`Category`)** for typed product categories  
--Includes a **Method Decorator (`@LogChange`)** that logs when price or stock is modified  
--Stores products in a **Tuple Array** (e.g., `[id, product]`)  
--Displays product details using **for...of** iteration  
--Fully **compilable and runnable** in JavaScript

---

## Folder Structure

userstory3/
│
├── productManager.ts # TypeScript source file
├── productManager.js # Compiled JavaScript output
└── README.md # Project documentation

---

## How It Works

1. The `IProduct` interface defines the structure for all products.
2. The `Product` class implements this interface and defines two updatable fields — `price` and `stock`.
3. The `@LogChange` decorator logs any updates to price or stock.
4. Products are stored in an array of tuples and displayed via a `for...of` loop.
5. The script demonstrates updates and logs changes accordingly.

---

## TypeScript Features Demonstrated

- **Interfaces** and **Classes**
- **Enums** for categories
- **Method Decorators** (new TS 5.x standard)
- **Tuples** and **Type Annotations**
- **Iterators (for...of loop)**
- **Compilation from `.ts` → `.js`**

---

## How to Run

### Step 1 — Compile TypeScript

````bash
tsc productManager.ts

### Step 2 — Compile TypeScript
```bash
node productManager.js

If tsc is not recognized, install TypeScript globally:
```bash
npm install -g typescript
````
