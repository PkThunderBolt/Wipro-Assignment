# Challenge 8 — Redux Toolkit Global State Management

## **User Story**

As an admin, I want to view and update product data **globally across pages** without prop drilling.

---

## **Problem Statement**

Implement **global state management** for product data using **Redux Toolkit**.  
Use reducers and actions to **fetch data from a mock API** and **update it globally**.

---

## **Expected Outcome**

- Configure Redux store using `configureStore()`.
- Create product slice using `createSlice()`.
- Fetch products and update them using `createAsyncThunk()` and `dispatch()`.
- Access state using `useSelector()` and update with `useDispatch()`.

**Bonus:**  
Integrate `redux-thunk` (already built-in with Redux Toolkit) for handling async operations.

---

## **Technologies Used**

- React.js
- Redux Toolkit (`@reduxjs/toolkit`)
- React Redux (`react-redux`)

---

## **Project Structure**

src/
┣ store/
┃ ┣ productSlice.js
┃ ┗ store.js
┣ components/
┃ ┣ ProductList.js
┃ ┗ ProductEditor.js
┣ App.js
┗ index.js

## How to Run

1. Clone or copy the project.
2. Install dependencies:
   --npm install @reduxjs/toolkit react-redux
   --npm start

## Final Output

-- View product list fetched from mock API.
-- Update product data globally.
-- Manage loading states automatically.
-- Demonstrate clean Redux Toolkit architecture.

## Author

--Developed By Prashant Kumar
