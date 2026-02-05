import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/global.scss';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    const productInCart = cart.filter(item => item.id === productId);
    const currentQuantity = productInCart.length;
    
    if (newQuantity > currentQuantity) {
      // Add more
      const product = productInCart[0];
      const itemsToAdd = newQuantity - currentQuantity;
      setCart([...cart, ...Array(itemsToAdd).fill(product)]);
    } else if (newQuantity < currentQuantity) {
      // Remove some
      const itemsToRemove = currentQuantity - newQuantity;
      const newCart = [...cart];
      for (let i = 0; i < itemsToRemove; i++) {
        const index = newCart.findIndex(item => item.id === productId);
        if (index !== -1) {
          newCart.splice(index, 1);
        }
      }
      setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className="App">
        <Header cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cart={cart} 
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            } 
          />
          <Route 
            path="/checkout" 
            element={<Checkout cart={cart} clearCart={clearCart} />} 
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;