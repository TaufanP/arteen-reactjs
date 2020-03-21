import React, { Component } from "react";
import "../assets/css/cart.css";
import CartDetail from "./cartDetail";

class Cart extends Component {
  render() {
    let modal = "button-checkout-";
    modal += this.props.cart.length !== 0 ? "show" : "hide";
    return (
      <div className="cart-container">
        {this.props.cart.length === 0 ? (
          <div className="empty-cart">
            <img
              src={require("../assets/images/empty-cart.svg")}
              alt="empty cart"
            />
            <span className="empty-cart-title">Your cart is empty</span>
            <span className="empty-cart-sub">
              Please add some items from the menu
            </span>
          </div>
        ) : (
          this.props.cart.map(value => (
            <CartDetail
              key={value.id}
              cart={value}
              handleCartRemove={this.props.handleCartRemove}
            />
          ))
        )}
        <div className={modal}>CHECKOUT</div>
      </div>
    );
  }
}

export default Cart;
