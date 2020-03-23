import React, { Component } from "react";
import "../assets/css/cardHistory.css";
import axios from "axios";
import { URL_ADDRESS } from "../env";

const URL_STRING = URL_ADDRESS;

class CardHistory extends Component {
  constructor() {
    super();
    this.state = {
      checkouts: []
    };
  }
  getCheckout = async () => {
    const config = {
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    };
    await axios
      .get(URL_STRING + "checkout/", config)
      .then(res => {
        const checkouts = res.data.result;
        this.setState({ checkouts });
      })
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.getCheckout();
  }
  render() {
    return (
      <div className="card-history-container">
        <div className="item-container-history">
          <div className="card-history">
            <div className="card-detail">
              <div className="sub-history">Income</div>
              <div className="number-history">Rp. 1.000.000</div>
            </div>
          </div>
          <div className="card-history" style={{ backgroundColor: "#4cbed8" }}>
            <div className="card-detail">
              <div className="sub-history">Orders</div>
              <div className="number-history">970</div>
            </div>
          </div>
          <div className="card-history" style={{ backgroundColor: "#b64cd8" }}>
            <div className="card-detail">
              <div className="sub-history">Items</div>
              <div className="number-history">1029</div>
            </div>
          </div>
        </div>
        <h2>Recent Orders</h2>
        <div className="table-container">
          <table style={{ width: "100%"}}>
            <thead>
              <tr>
                <td style={{ textAlign: "center", fontWeight: "bold" }}>
                  Invoice
                </td>
                <td style={{ textAlign: "center", fontWeight: "bold" }}>
                  Total Price
                </td>
                <td style={{ textAlign: "center", fontWeight: "bold" }}>
                  Last Payment
                </td>
              </tr>
            </thead>
            <tbody>
              {this.state.checkouts &&
                this.state.checkouts.map(value => {
                  return (
                    <tr style={{ padding: 8 }} key={value.id}>
                      <td style={{ textAlign: "center", padding: 8 }}>
                        {value.invoice}
                      </td>
                      <td style={{ textAlign: "center", padding: 8 }}>
                        Rp. {value.total}
                      </td>
                      <td style={{ textAlign: "center", padding: 8 }}>
                        {value.last_payment
                          .replace(/[TZ.]/gi, " ")
                          .slice(0, 19)}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CardHistory;
