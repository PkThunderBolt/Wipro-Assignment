import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ProductList from "./components/ProductList";
import ProductEditor from "./components/ProductEditor";

// Root component wrapped with Redux Provider to make the store available globally
function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Redux Product Management</h1>
        <ProductEditor />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
