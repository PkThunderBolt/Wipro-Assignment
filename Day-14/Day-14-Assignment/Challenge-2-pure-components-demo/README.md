# Day 14 — ReactJS Advanced Concepts

## Challenge 2: Pure Components (Render Optimization)

### User Story

> As a dashboard viewer,  
> I want widgets to render only when their data changes  
> so that performance is optimized.

---

### Project Overview

This project demonstrates **Pure Components** in React using `React.memo()`.  
Each dashboard card (`StatsCard`) re-renders **only** when its data changes.  
A **radio button selector** allows you to choose which card (Users, Revenue, or Orders) to update.  
Click **Simulate Update** to observe optimized re-renders in the console.

---

### Tech Stack

- **ReactJS (v18+)**
- **JavaScript (ES6+)**
- **Bootstrap 5** (optional for styling)

---

### Features Implemented

-- Pure Components using `React.memo()`  
-- Optimized re-renders (only changed components re-render)  
-- Console log for render tracking  
-- “Simulate Update” button with radio-based selection  
-- Clean, minimal dashboard UI

---

### Folder Structure

pure-components-demo/
│
├── src/
│ ├── components/
│ │ └── StatsCard.js
│ ├── App.js
│ ├── App.css
│ └── index.js
└── package.json

---

### Setup Instructions

#### 1 Create Project

```bash
npx create-react-app pure-components-demo
cd pure-components-demo
```

#### Bonus Enhancements:

--Convert StatsCard to a class-based PureComponent to show both approaches.
--Add "Reset All" button to revert data.
--Display a small toast or message when a card updates.
--Use API mock data for realism.

#### Expected Outcome

--Each card renders once initially.
--Selecting a card (via radio button) and clicking Simulate Update only re-renders that specific card.
--Console shows logs like:
-------------> Users rendered

#### Author

--Created by Prashant Kumar
