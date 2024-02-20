import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './crypto.css'
const Crypto = (props) => {
  const [buyPrice, setBuyPrice] = useState(null);
  const [profit, setProfit] = useState(null);
  const [isBought, setIsBought] = useState(false); // Track whether the cryptocurrency is bought
  const currentPrice = props.price.toFixed(2);
  const handleBuy = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/buy?currentPrice=${currentPrice}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
      });

      if (!response.ok) {
        throw new Error('Error buying crypto');
      }

      // Handle a successful buy action response
      setIsBought(true); // Set the state to indicate that it's bought

    } catch (error) {
      console.error('Error buying crypto', error);
      // Handle errors (e.g., show an error message to the user)
    }
  };

  const handleSell = () => {
    if (buyPrice !== null) {
      // Calculate profit based on the difference between the buying price and the current price
      const currentPrice = props.price.toFixed(2);
      const profitValue = (currentPrice - buyPrice).toFixed(2);
      setProfit(profitValue);
    }
  };

  return (
    <div id="tx" className=" d-inline-flex m-1  p-0" style={{ width: "200px" }}>
      <div style={{backgroundColor:'#1d1d2c',color:'white'}}className="card">
        <img
          src={props.image}
          className="card-img-top"
          alt="..."
          style={{ maxHeight: "150px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title badge  me-2">{props.name}</h5>
          <p className="card-text">
            <span className="badge bg-primary me-2">Symbol: {props.symbol}</span>
            <span className="badge bg-success">Current Price: ${props.price.toFixed(2)}</span>
          </p>
        </div>
        <ul className=" list-group-flush p-0 ">
          <li className="list-group-item">
            <span className=" ">Volume:</span> ${props.volume.toLocaleString()}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Price Change:</span> {props.priceChange.toFixed(2)}%
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Mrk. Cap:</span> ${props.marketcap.toLocaleString()}
          </li>
         
           
        </ul>
      </div>
    </div>
  );
};

export default Crypto;
