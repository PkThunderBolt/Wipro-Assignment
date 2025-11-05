// ---------- DOM ELEMENTS ----------
const productList = document.getElementById("product-list");
const loadingText = document.getElementById("loading");
const errorMessage = document.getElementById("error-message");
const categoryFilter = document.getElementById("category-filter");
const priceFilter = document.getElementById("price-filter");

let allProducts = []; // Stores all fetched products

// ---------- FETCH PRODUCTS ----------
async function fetchProducts() {
  try {
    loadingText.style.display = "block"; // Show loading
    errorMessage.textContent = "";       // Clear old errors

    const response = await fetch("products.json");

    // Check response status
    if (!response.ok) throw new Error("Network response was not ok");

    // Parse JSON data
    const data = await response.json();
    allProducts = data;

    displayProducts(allProducts); // Render products
  } catch (error) {
    console.error("Error fetching products:", error);
    errorMessage.textContent = "⚠️ Failed to load products. Please try again later.";
  } finally {
    loadingText.style.display = "none"; // Hide loading once done
  }
}

// ---------- DISPLAY PRODUCTS ----------
function displayProducts(products) {
  productList.innerHTML = "";

  if (products.length === 0) {
    productList.innerHTML = `<div class="empty">No products match your filters.</div>`;
    return;
  }

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.category}</p>
      <p class="price">₹${p.price.toLocaleString()}</p>
    `;
    productList.appendChild(card);
  });
}

// ---------- FILTER PRODUCTS ----------
function applyFilters() {
  let filtered = [...allProducts];

  const category = categoryFilter.value;
  const price = priceFilter.value;

  if (category !== "all") filtered = filtered.filter(p => p.category === category);

  if (price === "low") filtered = filtered.filter(p => p.price < 1000);
  else if (price === "medium") filtered = filtered.filter(p => p.price >= 1000 && p.price <= 5000);
  else if (price === "high") filtered = filtered.filter(p => p.price > 5000);

  displayProducts(filtered);
}

// ---------- EVENT LISTENERS ----------
categoryFilter.addEventListener("change", applyFilters);
priceFilter.addEventListener("change", applyFilters);

// ---------- INITIAL LOAD ----------
fetchProducts();
