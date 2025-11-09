# BookVerse

BookVerse is a simple React application built using the **Flux architecture**.  
It allows users to **view, add, and manage books** dynamically with data persistence using a JSON server.

---

## Features

- View all available books with title, author, price, and image.
- Add new books using a form with validation.
- Real-time updates using Flux (no page reload required).
- Data persistence with JSON server.
- Clean and responsive Bootstrap-based UI.

---

## Tech Stack

- **React.js** – Frontend UI
- **Flux** – State management
- **Axios** – API communication
- **Bootstrap** – Styling
- **Formik + Yup** – Form handling and validation
- **JSON Server** – Mock backend for data storage

---

## Project Structure

src/
│
├── components/
│ ├── AddBookForm.js # Form to add new books
│ ├── BookList.js # Displays list of all books
│ └── Navbar.js # Navigation bar with "Add Book" button
│
├── flux/
│ ├── actions/
│ │ └── BookActions.js # Defines all book-related actions
│ ├── dispatcher/
│ │ └── AppDispatcher.js # Central dispatcher for Flux
│ └── stores/
│ └── BookStore.js # Store that manages book data and listeners
│
├── App.js # Main application file
└── index.js # Entry point

## Installation

1. Clone the repository:

```bash
git clone https://github.com/PkThunderBolt/Wipro-Assignment/tree/master/Homework

```

2. Navigate to the project directory:
   cd bookverse
3. Install dependencies:
   npm install

4. Start the React development server:
   npm start

   ```

   ```

# ⚛️ Components Overview

This project is built using a **component-based architecture** in React.  
Each component has a single responsibility, making the app modular and easy to maintain.

---

## Components Description

### 1 **Navbar.js**

- Displays the application title and navigation button.
- The **"Add Book"** button links to the Add Book form.
- Keeps navigation consistent across all pages.

**Responsibilities:**

- Acts as the global navigation bar.
- Links to `/home` and `/add-book`.

---

### 2 **BookList.js**

- Fetches and displays the list of available books.
- Each book card shows:
  - Book **image**
  - Book **title**
  - Book **author**
  - Book **price**

**Responsibilities:**

- Fetches books from the JSON server using Axios.
- Subscribes to **BookStore** for real-time updates.
- Displays books in a responsive Bootstrap grid layout.

---

### 3 **AddBookForm.js**

- Provides a form for users to add new books.
- Uses **Formik** and **Yup** for form handling and validation.
- When submitted:
  - Dispatches the book to **BookStore** through Flux.
  - Sends the new book to the JSON server via Axios.
  - Resets the form after successful submission.

**Responsibilities:**

- Validates form inputs (title, author, price, image).
- Triggers **BookActions.addBook()** to update the store.
- Alerts the user after adding a book.

---

## Supporting Files (Flux Architecture)

### **BookActions.js**

- Defines the action type (`ADD_BOOK`).
- Dispatches actions through `AppDispatcher` to update the store.

### **BookStore.js**

- Maintains all books in memory.
- Listens for dispatched actions and updates book data.
- Notifies subscribed components about changes.

### **AppDispatcher.js**

- Central hub that manages action distribution between actions and stores.
- Part of the Flux data flow:

## Component Interaction

1. **User** fills in the form → clicks **Add Book**.
2. **BookActions** dispatches `ADD_BOOK` action.
3. **AppDispatcher** sends it to **BookStore**.
4. **BookStore** updates the book list and notifies **BookList**.
5. **BookList** re-renders automatically to show the new book.

### Author

--Created by **Prashant Kumar**.
