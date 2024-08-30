import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import CartList from "./pages/CartList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/productList" element={<ProductList />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
    </div>
  );
}

export default App;
