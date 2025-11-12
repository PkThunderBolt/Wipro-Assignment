# Day 14 — ReactJS Advanced Concepts

## Challenge 1: Lazy Loading & Code Splitting

### Project Overview

This project demonstrates **Lazy Loading** and **Code Splitting** in React using `React.lazy()` and `Suspense`.  
The goal is to load modules like **Course Details** and **Instructor Profile** only when the user clicks on them — improving performance and initial load time.

---

### User Story

> As a user of an online learning platform,  
> I want modules to load only when I click on them  
> so that the app loads faster.

---

### Concepts Used

- `React.lazy()` for dynamic import of components
- `Suspense` for fallback UI while modules load
- Conditional rendering with `useState`
- Bootstrap for styling and spinner loader

---

### Tech Stack

- **ReactJS (v18+)**
- **Bootstrap 5**
- **JavaScript (ES6+)**

---

### Setup Instructions

#### 1 Create the React App

```bash
npx create-react-app lazy-loading-demo
cd lazy-loading-demo
```

#### 2 Install Dependencies

-- npm install bootstrap

#### 3 Import Bootstrap in index.js

-- import 'bootstrap/dist/css/bootstrap.min.css';

#### 4 Add the Following Files

Folder Structure :-
src/
├── components/
│ ├── CourseDetails.js
│ ├── InstructorProfile.js
│ └── Loader.js
├── App.js
├── App.css
└── index.js

#### Expected Outcome

--Only visible modules load initially.
--Clicking “View Course Details” or “View Instructor Profile” dynamically imports the component.
--A loading spinner (Bootstrap) appears while the component is fetched.
--Smooth user experience and faster initial page load.

#### Author

-- Created by Prashant Kumar
