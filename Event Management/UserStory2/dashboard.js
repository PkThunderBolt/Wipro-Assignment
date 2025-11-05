// Uses Fetch API to load events.json
// ES6: let/const, arrow functions, destructuring, template literals, async/await

const eventsUrl = "events.json"; // same folder

let EVENTS = [];
let FILTERS = { category: "", date: "", search: "" };

const elements = {
  container: document.getElementById("eventsContainer"),
  categoryFilter: document.getElementById("categoryFilter"),
  dateFilter: document.getElementById("dateFilter"),
  searchInput: document.getElementById("searchInput"),
  refreshBtn: document.getElementById("refreshBtn"),
  dashboardMsg: document.getElementById("dashboardMsg"),
};

document.addEventListener("DOMContentLoaded", () => {
  attachListeners();
  loadEvents();
});

function attachListeners() {
  elements.categoryFilter.addEventListener("change", (e) => {
    FILTERS.category = e.target.value;
    render();
  });

  elements.dateFilter.addEventListener("change", (e) => {
    FILTERS.date = e.target.value;
    render();
  });

  elements.searchInput.addEventListener("input", (e) => {
    FILTERS.search = e.target.value.trim().toLowerCase();
    render();
  });

  elements.refreshBtn.addEventListener("click", () => loadEvents());
}

async function fetchEvents() {
  try {
    const res = await fetch(eventsUrl, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch events.json: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function loadEvents() {
  showMessage("Loading events...");
  try {
    const data = await fetchEvents();
    EVENTS = Array.isArray(data) ? data : [];
    populateCategoryFilter(EVENTS);
    render();
    showMessage(`Loaded ${EVENTS.length} events.`, "success");
  } catch (err) {
    showMessage(
      "Unable to load events. Check events.json or network.",
      "danger"
    );
  }
}

function populateCategoryFilter(events) {
  const categories = [...new Set(events.map((e) => e.category))].sort();
  elements.categoryFilter.innerHTML =
    '<option value="">All Categories</option>';
  categories.forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    elements.categoryFilter.appendChild(opt);
  });
}

function applyFilters(events) {
  return events.filter((ev) => {
    const { category, date, search } = FILTERS;

    if (category && ev.category !== category) return false;
    if (date && ev.date !== date) return false;

    if (search) {
      const hay = (ev.title + " " + ev.short + " " + ev.location).toLowerCase();
      if (!hay.includes(search)) return false;
    }

    return true;
  });
}

function render() {
  const filtered = applyFilters(EVENTS);
  elements.container.innerHTML = "";

  if (filtered.length === 0) {
    elements.container.innerHTML = `
      <div class="col-12">
        <div class="alert alert-warning">No events match your filters.</div>
      </div>`;
    return;
  }

  filtered.forEach((ev) => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4";

    const { title, short, date, location, image, id } = ev;
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${image}" class="card-img-top" alt="${title}" style="height:180px;object-fit:cover;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${short}</p>
          <div class="mt-auto d-flex justify-content-between align-items-center">
            <small class="text-muted">${date} • ${location}</small>
            <button class="btn btn-sm btn-primary" data-id="${id}">Register</button>
          </div>
        </div>
      </div>`;
    elements.container.appendChild(col);
  });

  elements.container.querySelectorAll("button[data-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = Number(btn.getAttribute("data-id"));
      const ev = EVENTS.find((x) => x.id === id);
      alert(`You clicked register for: ${ev.title} (${ev.date})`);
    });
  });
}

function showMessage(msg, type = "info") {
  const el = elements.dashboardMsg;
  el.className = "";
  if (type === "success") el.className = "alert alert-success";
  else if (type === "danger") el.className = "alert alert-danger";
  else if (type === "warning") el.className = "alert alert-warning";
  else el.className = "alert alert-info";

  el.textContent = msg;
}
