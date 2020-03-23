import React, { Component } from "react";
import "../assets/css/cardHistory.css";

class CardHistory extends Component {
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
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <td style = {{textAlign: 'center', fontWeight: 'bold'}}>Invoice</td>
                <td style = {{textAlign: 'center', fontWeight: 'bold'}}>Total Price</td>
                <td style = {{textAlign: 'center', fontWeight: 'bold'}}>Last Payment</td>
              </tr>
            </thead>
            <tbody>
              <tr style={{ padding: 8 }}>
                <td style={{ textAlign: "center", padding: 8 }}>230320200338290</td>
                <td style={{ textAlign: "center", padding: 8 }}>Rp. 8000</td>
                <td style={{ textAlign: "center", padding: 8 }}>23-03-2020 03:38</td>
              </tr>
              <tr style={{ padding: 8 }}>
                <td style={{ textAlign: "center", padding: 8 }}>230320200338290</td>
                <td style={{ textAlign: "center", padding: 8 }}>Rp. 26000</td>
                <td style={{ textAlign: "center", padding: 8 }}>23-03-2020 03:38</td>
              </tr>
              <tr style={{ padding: 8 }}>
                <td style={{ textAlign: "center", padding: 8 }}>230320200338290</td>
                <td style={{ textAlign: "center", padding: 8 }}>Rp. 9000</td>
                <td style={{ textAlign: "center", padding: 8 }}>23-03-2020 03:38</td>
              </tr>
              <tr style={{ padding: 8 }}>
                <td style={{ textAlign: "center", padding: 8 }}>230320200338290</td>
                <td style={{ textAlign: "center", padding: 8 }}>Rp. 36000</td>
                <td style={{ textAlign: "center", padding: 8 }}>23-03-2020 03:38</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CardHistory;
