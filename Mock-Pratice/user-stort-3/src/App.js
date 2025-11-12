import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BookingForm from "./pages/BookingForm";
import SuccessPage from "./pages/SuccessPage";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
