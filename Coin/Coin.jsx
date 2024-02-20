import React, {useState,useEffect} from "react";
import axios from "axios";
import Crypto from "./Crypto";
import 'bootstrap/dist/css/bootstrap.min.css';
import './coin.css';
import { Link } from "react-router-dom";
const Coin = () => {
const [coins, setCoins] = useState([]);
const [search, setSearch] = useState("");
useEffect(() => {
  axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
    .then((res) => {
      setCoins(res.data);
      console.log(res.data);
    })
    .catch((error) => console.log(error));
}, []);

const filteredCoins = coins.filter((coinss) =>
coinss.name.toLowerCase().includes(search.toLowerCase())
);
const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return( <div className="m" style={{boxsizing:'border-box',backgroundColor:'#1d1d2c'}}>
     <button type="submit"  className="login-button">
     <Link to="/" style={{ color: 'white', textDecoration:'none' }}>Logout</Link>
          </button>
<div className="container">
      <div className="row justify-content-center mt-0  mb-2">
        <div className="col-md-7">
          <div id='s' className="card m-3 p-1 ">
            <div id='s' className="card-body ">
              <h1 className="card-title text-center fw-bolder text-info-emphasis  " >Search a Currency</h1>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Search"
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-warning" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
  { filteredCoins.map((coin)=>(
    <Crypto
    key={coin.id}
    name={coin.name}
     price={coin.current_price}
     symbol={coin.symbol}
     marketcap={coin.total_volume}
     volume={coin.market_cap}
     image={coin.image}
     priceChange={coin.price_change_percentage_24h}
            />
  )
  )}</div>)
};

export default Coin;
