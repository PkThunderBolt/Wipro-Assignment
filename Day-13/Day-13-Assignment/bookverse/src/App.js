import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<BookList />} />
        <Route path="/add-book" element={<AddBookForm />} />
      </Routes>
    </Router>
  );
}

export default App;
