import React, { Component } from "react";
import "../assets/css/products.css";
import ListProduct from "./listProduct";

class Products extends Component {
  render() {
    return (
      <div className="product-container">
        {this.props.products.map(product => (
          <ListProduct
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            showModalUpdate={this.props.showModalUpdate}
            handleDelete={this.props.handleDelete}
            handleEdit={this.props.handleEdit}
            handleCart={this.props.handleCart}
            selected={this.props.selected}
            selectedValue = {this.props.selectedValue}
            cart = {this.props.cart}
          />
        ))}
      </div>
    );
  }
}

export default Products;
