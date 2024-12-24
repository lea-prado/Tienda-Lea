import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
        alt="Carrito"
        className="cart-icon"
      />
      <span className="cart-count">3</span>
    </div>
  );
};

export default CartWidget;
