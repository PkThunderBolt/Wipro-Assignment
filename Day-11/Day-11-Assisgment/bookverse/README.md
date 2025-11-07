## BookVerse — React Project

BookVerse is a React-based mini project that demonstrates **Component Composition**, **Styling**, **Props Validation**, and **Lifecycle Methods** using both **class** and **functional components**.  
Users can browse books, search by title or author, and view detailed author info — all in a clean Bootstrap layout.

---

## Features

- **Dynamic Book Listing** — Displays a collection of books with titles, authors, and prices
- **Author Details View** — Click on any book to view the author’s bio and top 3 books
- **Search Functionality** — Instantly filters books by title **or** author name
- **Refs (Uncontrolled Components)** — Focus the search input using a button click
- **PropTypes Validation** — Ensures proper data types for BookCard props
- **Lifecycle Method Demo** — Logs author data when component mounts
- **Bootstrap Styling** — Clean, responsive, card-based UI

---

## Tech Stack

- **React.js**
- **Bootstrap 5**
- **PropTypes**
- **CSS3 (custom styling)**

---

## Project Structure

BookVerse/
│
├── node_modules/
├── public/
├── src/
│ ├── components/
│ │ ├── AuthorInfo.js # Class component showing author bio & top books
│ │ ├── BookCard.js # Functional component for individual book cards
│ │ ├── BookList.js # Main class component managing state & logic
│ │ └── SearchBar.js # Class component with ref-based focus
│ ├── App.js # Root component
│ ├── App.css # Custom styling
│ ├── index.js # React DOM entry point
│ └── index.css
│
├── package.json
└── README.md

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

1 App.js

-The entry point of the application.
-It just displays the main heading “BookVerse” and renders the BookList component inside it.

2 BookList.js

-This is the core component of the project.
-It’s a class component responsible for:

-Holding the list of all books in its state

-Managing the selected author data

-Filtering books based on the search query

-Handling book clicks

-Composing all subcomponents (BookCard, AuthorInfo, and SearchBar)-

3 BookCard.js

-A functional component used for displaying individual books in a Bootstrap card format.

-Shows the title, author, and price of each book

-Handles click events via a function passed from BookList

-Uses PropTypes to validate data

4 AuthorInfo.js

-A class component that displays the author’s bio and their top 3 books when a user clicks on a book.

-Uses the componentDidMount() lifecycle method to log when author data loads

-Receives props from BookList

5 SearchBar.js

-A class component demonstrating Refs (uncontrolled components).
It contains:

-A text input for search

-A button that focuses the input using createRef()

### Example Interactions

--Type in the search bar → Filters books in real time

--Click "Focus Search" → Cursor jumps into the input field

--Click any Book Card → Displays author details below
