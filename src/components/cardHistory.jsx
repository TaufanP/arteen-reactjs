import React, { Component } from "react";
import "../assets/css/cardHistory.css";

class CardHistory extends Component {
  render() {
    return (
      <div className="card-history-container">
        <div className="item-container-history">
          <div className="card-history">
            <div className='card-detail'>
                <div className = 'sub-history'>Income</div>
                <div className = 'number-history'>Rp. 1.000.000</div>
            </div>
          </div>
          <div className="card-history" style={{backgroundColor: '#4cbed8'}}>
            <div className='card-detail'>
                <div className = 'sub-history'>Orders</div>
                <div className = 'number-history'>970</div>
            </div>
          </div>
          <div className="card-history" style={{backgroundColor: '#b64cd8'}}>
            <div className='card-detail'>
                <div className = 'sub-history'>Items</div>
                <div className = 'number-history'>1029</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardHistory;
