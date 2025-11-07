import React from "react";
import BookList from "./components/BookList";
import "./App.css";

// Root component of the application
// It renders the project title and the main BookList component
function App() {
  return (
    <div className="App container mt-4">
      <h1 className="text-center mb-4">## BookVerse ##</h1>
      <BookList />
    </div>
  );
}

export default App;
