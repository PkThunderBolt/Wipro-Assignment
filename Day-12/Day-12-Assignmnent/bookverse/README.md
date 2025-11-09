# BookVerse

BookVerse is a React-based book library application where users can explore books, view detailed author information, and navigate seamlessly through different components.  
It demonstrates key React concepts like **component composition**, **React Router**, **HOCs (Higher-Order Components)**, and **Render Props**.

---

## Features

- **Search & Browse Books** – Explore available books from a dynamic list
- **View Book Details** – Click on a book to see author info, price, and top books
- **Component Composition** – Cleanly structured React components for scalability
- **Higher Order Components (HOC)** – Used for loading state management
- **Render Props** – Used to render custom messages dynamically
- **Bootstrap Styling** – Responsive design with clean UI and animations

## Project Structure

BookVerse/
│
├── public/
│ └── index.html
│
├── src/
│ ├── components/
│ │ ├── BookDetails.js
│ │ ├── BookList.js
│ │ ├── Navbar.js
│ │  
│ │
│ ├── hoc/
│ │ ├── RenderMessage.js
│ │ └── withLoading.js
│ │
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ ├── books.json
│ └── reportWebVitals.js
│
└── package.json

---

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

## Components Explanation

### 1. **Navbar**

- Displays the app title **BookVerse** in the center.
- Uses React Router `<Link>` for navigation.
- Written as a **functional component**.

### 2. BookList

--Fetches book data from a JSON server using Axios.
--Displays books in responsive Bootstrap cards.
--Wrapped with a Higher-Order Component (withLoading) for managing loading states.
--Uses Render Props (RenderMessage) to display a custom welcome message.

### 3. BookDetails

--Displays detailed information about a selected book and its author.
--Uses React Router’s useParams hook to fetch data dynamically based on book ID.
--Shows author bio and top 3 books from the same author.
--Implements a “Back to Home” navigation using React Router.

### 4. withLoading (HOC)

--A Higher-Order Component that takes a component as input and adds a loading spinner before rendering data.
--Helps separate logic for loading states from the main UI.

### 5. RenderMessage (Render Props)

--A Render Props pattern component that accepts a message prop.
--Displays a dynamic text message on the screen.

### Learning Concepts Covered

--Class and Functional Components
--Props, State, and Hooks (useState, useEffect)
--Higher-Order Components (HOC)
--Render Props pattern
--Controlled & Uncontrolled Components (Refs)
--Component Composition & Reusability

### Author

--Created by **Prashant Kumar**.
