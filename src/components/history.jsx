import React, { Component } from "react";
import "../assets/css/loginWarn.css";
import TrainMenu from "./trainMenu";
import Header from "./header";
import CardHistory from "./cardHistory";

class History extends Component {
  relogin = () => {
    this.props.history.push("/product");
  };
  componentDidMount() {
    if (localStorage.getItem("token") === null) {
      this.props.history.push("/loginwarn");
    }
  }
  render() {
    return (
      <div>
        <Header />
        <TrainMenu />
        <CardHistory />
      </div>
    );
  }
}

export default History;
