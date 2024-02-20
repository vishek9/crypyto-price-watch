import {React,useState} from "react";

const Searchs = () => {
    const [search, setSearch] = useState("");

    
    
    const handleChange = (e) => {
        setSearch(e.target.value);
      };
    const filteredCoins = ()=>(coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  ));
  return (<div>
    
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div></div>
  </div>)
};

export default Searchs;
