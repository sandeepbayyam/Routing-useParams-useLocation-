import React from 'react';
import './style.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ProductsList from './ProductsList';
import ProductDetails from './ProductDetails';
export default function App() {
  return (
    <BrowserRouter>
      <div className="betterview">
        <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/products">Products</Link>&nbsp;&nbsp;&nbsp;
        <Routes>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}>
            <Route path="contact" element={<Contact></Contact>}></Route>
          </Route>
          <Route path="products" element={<ProductsList/>}>
          </Route>
          <Route path="productDetails/:name" element={<ProductDetails/>}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
