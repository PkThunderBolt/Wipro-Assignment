# Day 14 — ReactJS Advanced Concepts

## Challenge 3: Error Boundary

### User Story

> As a product manager,  
> I want the app to display a friendly error message instead of crashing  
> when a component fails.

---

### Problem Statement

Create an **Error Boundary** component that catches rendering errors in child components  
(e.g., a broken `ProductCard`) and displays a **fallback UI**.  
The rest of the application should continue working normally.

---

### Expected Outcome

- The app **does not crash** even if a component throws an error.
- Displays a friendly message like “⚠️ Something went wrong!”.
- Implements:
  - `getDerivedStateFromError()`
  - `componentDidCatch()`
- Bonus: Logs error details to the console or sends them to a mock monitoring API.

---

### Tech Stack

- **ReactJS (v18+)**
- **JavaScript (ES6+)**
- **Bootstrap 5** (optional for styling)

---

### Folder Structure

error-boundary/
│
├── src/
│ ├── components/
│ │ ├── ErrorBoundary.js
│ │ └── ProductCard.js
│ ├── App.js
│ ├── App.css
│ └── index.js
└── package.json

---

### Setup Instructions

#### 1 Create the React App

```bash
npx create-react-app error-boundary
cd error-boundary
npm install bootstrap
```

#### 2 Add Bootstrap (optional)

In index.js: import 'bootstrap/dist/css/bootstrap.min.css';

#### Expected Behavior

--All valid product cards render correctly.
--When the broken product (name: "") loads, the Error Boundary catches the exception.
--Displays a red alert:
⚠️ Something went wrong!
Please try again later or contact support.

--Console shows:
Error caught by ErrorBoundary: Error: Product name is missing!
Component stack trace: ...
Sent error details to mock monitoring API
