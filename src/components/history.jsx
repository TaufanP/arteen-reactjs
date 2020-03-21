import React, { Component } from "react";
import "../assets/css/loginWarn.css";
import TrainMenu from "./trainMenu";
import Header from "./header";
import CardHistory from "./cardHistory";

class History extends Component {
  relogin = () => {
    this.props.history.push("/product");
  };
  render() {
    return (
      <div>
        <Header />
        <TrainMenu />
        <CardHistory/>
      </div>
    );
  }
}

export default History;
