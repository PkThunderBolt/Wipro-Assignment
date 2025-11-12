# Workout Tracker — React Hooks Challenge 7

## Overview

This project demonstrates the use of **React Hooks** — `useState`, `useEffect`, and `useRef` — along with a **custom hook** to create a simple **Workout Tracker** app.  
It tracks workout sets, manages rest time, and uses a timer that updates automatically.

---

## User Story

As a **fitness enthusiast**, I want my “Workout Tracker” to automatically track sets and rest time using React Hooks.

---

## Problem Statement

Create a functional component that uses `useState`, `useEffect`, and `useRef` to manage:

- Number of sets
- Active/rest timers
- Auto-reset logic

Bonus: Add a **custom hook (`useTimer`)** to abstract timer logic.

---

## Features

-- Timer updates every second using `useEffect`  
-- Stops timer with cleanup using `clearInterval`  
-- Tracks workout sets and rest periods  
-- Uses `useRef` to store interval ID without re-rendering  
-- Custom hook `useTimer()` for reusable logic

---

## Project Structure

src/
│
├── App.js
├── hooks/
│ └── useTimer.js
└── components/
└── WorkoutTracker.js

## Usage

--Run npm install to install dependencies.
--Start the app using npm start.
--Click Start Set to begin timing your workout.
--Use Rest to start a rest timer and Finish Rest to end it.
--Observe timer auto-updates every second.

## Key Learnings

--How to manage side effects with useEffect
--How to use useRef to hold mutable data across renders
--How to build reusable logic with custom hooks
--Timer cleanup and interval handling in React

## Author

--Developed by Prashant Kumar
