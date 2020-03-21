import React, { Component } from "react";
import "../assets/css/cart.css";
import CartDetail from "./cartDetail";

class Cart extends Component {
  render() {
    const date = new Date();
    const fullYear = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) month = "0" + month;
    let day = date.getDate();
    if (day < 10) day = "0" + day;
    let random = Math.floor(Math.random() * 1000);
    if (random < 1000) random = "0" + random;
    if (random < 100) random = "00" + random;
    if (random < 10) random = "000" + random;
    const invoice = day + month + fullYear + random;
    let modal = "button-checkout-";
    modal += this.props.cart.length !== 0 ? "show" : "hide";
    let total = "total-price-";
    total += this.props.cart.length !== 0 ? "show" : "hide";
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
        <div className = {total}>Total: Rp 105.000</div>
        <div
          className={modal}
          onClick={() => this.props.handleSubmitOrder(invoice)}
        >
          CHECKOUT
        </div>
        <div
          className={modal}
          style = {{backgroundColor: 'rgb(222, 83, 83)', marginTop: 16}}
        >
          CANCEL
        </div>
      </div>
    );
  }
}

export default Cart;
