# User Story 2 – Product Listing with API Fetch and Filtering

### Scenario

This project demonstrates a **Product Listing Page** that dynamically fetches product data from a mock API (`products.json`) and allows **filtering by category and price**.  
It is implemented using **HTML, CSS, and JavaScript** with a focus on **asynchronous data handling** and **DOM manipulation**.

---

## Features

--Fetches product data asynchronously using `fetch()` and `async/await`  
 --Displays a loading message while fetching data  
 --Handles API errors gracefully with `try...catch`  
 --Dynamically renders products using DOM manipulation  
 --Provides filter options by **category** and **price range**  
 --Clean and modern **responsive UI**  
 --Displays a footer line: _"Developed by Prashant Kumar."_

---

## Folder Structure

userstory2/
│
├── index.html # Main HTML file
├── script.js # JavaScript logic (fetch, filter, render)
└── products.json # Mock API data (25 products)

---

## How It Works

1. When the page loads, `script.js` fetches data from `products.json` using `async/await`.
2. A loading message is displayed while data is being fetched.
3. Once data is available, products are displayed dynamically on the page.
4. Users can filter products by category and by maximum price.
5. If an error occurs (e.g., missing file or network issue), a friendly message is displayed.

---

## How to Run

1. Download or clone this repository.
2. Open the folder `userstory2/` in VS Code or any IDE.
3. Open `index.html` in a browser.
4. Use the category and price filter to explore products.

---

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

---

### Developed by **Prashant Kumar**
