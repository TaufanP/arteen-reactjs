import React, { Component } from "react";
import '../assets/css/navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div>
                <div className = "navbar">
                    <div className = "menu">
                        <img src={require('../assets/images/menu.svg')} alt = "humb menu"/>
                    </div>
                    <div className = "app-title">
                        <span className = "title">Food Items</span>
                    </div>
                    <div className = "search-bar">
                        <input type = "text" onChange = {this.props.handleSearch} placeholder = "Search something"/>
                    </div>
                    <div className = "logout">
                        <span className = "logout-label" onClick = {this.props.handleLogout}>LOG OUT</span>
                    </div>
                    <div className = "cart-header">
                        <span className = "cart-title">Cart</span><span className = "cart-count">{this.props.cart.length === 0 ? 0 : this.props.cart.length}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;