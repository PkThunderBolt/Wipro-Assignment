# Wipro Travel – User Story 2: Travel Package Management

A React-based Travel Package Management web app that demonstrates **Routing, Data Integration, and Lifecycle Methods**.  
The project fetches travel packages dynamically using **json-server** and provides smooth navigation using **React Router**.

---

## Features

- **Routing Setup** — `/home`, `/packages`, `/contact`
- **Data Fetching** — Fetch package data from `json-server`
- **Lifecycle Methods** — Implemented using `useEffect`
- **Transition Effects** — Page fade animation during route changes
- **Dynamic UI** — Responsive layout using Bootstrap
- **PropTypes Validation** — Ensures data consistency

---

## Technologies Used

- **React** (Functional Components + Hooks)
- **React Router DOM**
- **Axios / Fetch API**
- **Bootstrap 5**
- **json-server**

---

## Folder Structure

user-story-2/
│
├── public/
│ ├── db.json
│ └── index.html
│
├── src/
│ ├── components/
│ │ ├── Header.js
│ │ ├── Footer.js
│ │ ├── PackageCard.js
│ │
│ ├── pages/
│ │ ├── Home.js
│ │ ├── Packages.js
│ │ └── Contact.js
| | | Home.css
│ │
│ ├── App.js
│ ├── App.css
│ └── index.js
│
├── package.json
└── README.md
