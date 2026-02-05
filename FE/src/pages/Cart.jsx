import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Cart.module.scss';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const navigate = useNavigate();
  
  const getCartItems = () => {
    const items = {};
    cart.forEach(item => {
      if (items[item.id]) {
        items[item.id].quantity += 1;
      } else {
        items[item.id] = { ...item, quantity: 1 };
      }
    });
    return Object.values(items);
  };

  const cartItems = getCartItems();
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleUpdateQuantity = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemove = (productId) => {
    if (confirm('Are you sure you want to remove this item?')) {
      removeFromCart(productId);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <div className="container">
          <div className={styles.emptyContent}>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <h2>Your cart is empty</h2>
            <p>Start adding products to your cart!</p>
            <Link to="/products" className="btn btn-primary">Browse Products</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <div className="container">
        <h1 className={styles.pageTitle}>Shopping Cart</h1>

        <div className={styles.cartLayout}>
          <div className={styles.cartItems}>
            {cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <Link to={`/products/${item.id}`} className={styles.itemImage}>
                  <img src={item.image} alt={item.name} />
                </Link>

                <div className={styles.itemDetails}>
                  <Link to={`/products/${item.id}`}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                  </Link>
                  <p className={styles.itemCategory}>{item.category}</p>
                  <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                </div>

                <div className={styles.itemActions}>
                  <div className={styles.quantityControl}>
                    <button 
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>

                  <p className={styles.itemTotal}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button 
                    className={styles.removeButton}
                    onClick={() => handleRemove(item.id)}
                    title="Remove item"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <h2>Order Summary</h2>
            
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <button 
              className="btn btn-primary"
              onClick={() => navigate('/checkout')}
              style={{ width: '100%', marginTop: '24px' }}
            >
              Proceed to Checkout
            </button>

            <Link to="/products" className={styles.continueShopping}>
              ← Continue Shopping
            </Link>

            <div className={styles.paymentNote}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              <p>Payment method: Cash on Delivery (COD) only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;