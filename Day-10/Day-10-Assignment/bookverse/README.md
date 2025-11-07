### File structure

bookverse/
├── public/
├── src/
│ ├── components/
│ │ ├── BookCard.js
│ │ └── BookList.js
│ ├── App.js
│ └── index.js
├── package.json
└── README.md

# BookVerse – Welcome Page and Featured Books

## Project Overview

**BookVerse** is a simple React application that displays a list of featured books on the home page. Visitors can view books in either **Grid** or **List** layout and search for books by title or author. This project demonstrates **React fundamentals**, including functional components, props, state management, event handling, and controlled components.

## Features

- Display a list of books using **BookCard** component
- Toggle between **Grid** and **List** view modes
- Search for books with a **controlled input box**
- Functional component structure with **props and state**
- Event handling for button clicks and search input

## User Story

**As a visitor**,  
I want to view a list of featured books on the home page,  
so that I can get an overview of popular books available.

### Acceptance Criteria

- Initialize a React app using `create-react-app`
- Create a **BookCard** component displaying book title, author, and price
- Create a **BookList** parent component that renders multiple **BookCard** components using props
- Use **state** to manage and toggle between two view modes – “Grid” and “List”
- Handle button click events to switch layout
- Demonstrate **controlled components** with a search input box to filter books

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

### Components

1.  BookCard
    -Functional component that displays individual book details
    -Props: title, author, price
    -Example: <BookCard title="The Hobbit" author="J.R.R. Tolkien" price={12.99} />

2.  BookList
    -Parent component that manages the list of books
    Features:

        -State: viewMode (grid or list) and searchTerm

        -Filter: Search books by title or author

        -Event Handling: Buttons to switch view modes
        -Example: <BookList />

### How to Use

    -View featured books on the home page

    -Click Grid View or List View to toggle layout

    -Use the search box to filter books by title or author
