import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart-items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <div key={product.id} className="cart-item-container">
                <CartItem data={product} />
                <button
                  className="details-button"
                  onClick={() => navigate('/customerdetails', { state: { product } })}
                >
                  Details
                </button>
              </div>
            );
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <div className="subtotal">
            <h2>Subtotal:{totalAmount.toLocaleString()}/-</h2>
          </div>
          <div className="buttons">
            <button onClick={() => navigate("/shop")}>Continue Shopping</button>
            <button onClick={() => { checkout(); navigate("/checkout"); }}>
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
