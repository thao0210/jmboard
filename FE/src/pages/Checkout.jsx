import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Checkout.module.scss';

const Checkout = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    ward: '',
    postalCode: '',
    notes: ''
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.fullName || !formData.phone || !formData.address || !formData.city) {
      alert('Please fill in all required fields');
      return;
    }

    // Simulate order placement
    console.log('Order placed:', {
      customer: formData,
      items: cartItems,
      total: subtotal,
      paymentMethod: 'COD'
    });

    alert('Order placed successfully! Our team will contact you soon.');
    clearCart();
    navigate('/');
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className={styles.checkoutPage}>
      <div className="container">
        <h1 className={styles.pageTitle}>Checkout</h1>

        <div className={styles.checkoutLayout}>
          <form className={styles.checkoutForm} onSubmit={handleSubmit}>
            <div className={styles.formSection}>
              <h2>Delivery Information</h2>
              
              <div className={styles.formGroup}>
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+81 XX-XXXX-XXXX"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Street address, building name, apartment"
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Tokyo"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>District</label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="Shibuya"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Ward</label>
                  <input
                    type="text"
                    name="ward"
                    value={formData.ward}
                    onChange={handleChange}
                    placeholder="Ward name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="XXX-XXXX"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Order Notes (Optional)</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Special instructions for delivery..."
                />
              </div>
            </div>

            <div className={styles.formSection}>
              <h2>Payment Method</h2>
              
              <div className={styles.paymentMethod}>
                <div className={styles.codOption}>
                  <input type="radio" id="cod" name="payment" checked readOnly />
                  <label htmlFor="cod">
                    <div className={styles.codIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                        <line x1="1" y1="10" x2="23" y2="10"/>
                      </svg>
                    </div>
                    <div>
                      <strong>Cash on Delivery (COD)</strong>
                      <p>Pay when you receive your order</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Place Order
            </button>
          </form>

          <div className={styles.orderSummary}>
            <h2>Order Summary</h2>

            <div className={styles.summaryItems}>
              {cartItems.map(item => (
                <div key={item.id} className={styles.summaryItem}>
                  <img src={item.image} alt={item.name} />
                  <div className={styles.itemInfo}>
                    <h4>{item.name}</h4>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <p className={styles.itemPrice}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className={styles.secureNote}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <p>Your order information is secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;