import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./pages/landing";
import CreateProduct from "./pages/createProduct";
import ProductDetail from './components/Form/product_detail'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;