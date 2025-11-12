import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./userstory1/Home";
import Packages from "./userstory2/PackageList";
import BookingForm from "./userstory3/BookingForm";
import "./styles.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/packages"
          element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Packages />
            </motion.div>
          }
        />
        <Route
          path="/booking"
          element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <BookingForm />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="app-container d-flex flex-column min-vh-100">
        {/* STICKY HEADER */}
        <header className="app-header shadow-sm bg-light py-3 sticky-top">
          <div className="container d-flex justify-content-between align-items-center">
            <h2 className="fw-bold text-primary mb-0">Wipro_Travel</h2>
            <nav>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link d-inline mx-2" + (isActive ? " active-link" : "")
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/packages"
                className={({ isActive }) =>
                  "nav-link d-inline mx-2" + (isActive ? " active-link" : "")
                }
              >
                Packages
              </NavLink>
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  "nav-link d-inline mx-2" + (isActive ? " active-link" : "")
                }
              >
                Booking
              </NavLink>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT with transitions */}
        <main className="flex-fill container my-4">
          <AnimatedRoutes />
        </main>

        {/* BEAUTIFUL FOOTER */}
        <footer className="app-footer text-white mt-auto py-4">
          <div className="container text-center">
            <p className="mb-1 fs-5">
              © {new Date().getFullYear()} <strong>Wipro_Travel </strong>
              Explore the World with Us
            </p>
            <div>
              <a href="#" className="text-white mx-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white mx-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white mx-2">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
