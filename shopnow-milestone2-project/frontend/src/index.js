import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");

// This line creates the root for the React application and attaches it to the div from index.html.
const root = ReactDOM.createRoot(rootElement);

// This line renders the App component inside BrowserRouter so that routing works in the whole app.
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
