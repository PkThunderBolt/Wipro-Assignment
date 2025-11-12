# Challenge 5 — React Context API: Theme Toggle App

## User Story

As a user, I want my preferred theme (light/dark) to apply across all pages without passing props manually.

---

## Problem Statement

Implement a **ThemeContext** using the **React Context API** to manage global theme state.  
Provide theme values at the top-level (`App.js`) and consume them using `useContext()` in multiple child components.

---

## Expected Outcome

- Use `ThemeContext.Provider` in `App.js`
- Toggle between **Light** and **Dark** themes
- Apply theme globally across multiple components without prop drilling

---

## Project Structure

src/
┣ components/
┃ ┣ Header.js
┃ ┗ Content.js
┣ context/
┃ ┗ ThemeContext.js
┣ App.js
┗ index.js

## Bonus

--Store the selected theme in localStorage to persist user preference.
--Add transition effects when switching themes.

## Outcome

-- Global theme managed using Context API
-- No prop drilling
-- Smooth light/dark mode switching across all components
-- Bonus: Ready to extend for user preferences or localization

## Author

--Developed by Prashant kumar
