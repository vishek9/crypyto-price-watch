import React from "react";
import { Link } from 'react-router-dom';
import Imagess from '../img/cryptocurrency.svg';
import "./nav.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const Nav = () => {
  return (
    <nav id="t" className="navbar navbar-expand-lg  border-body justify-content-between">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: 'white', textDecoration:'none' }}>
          <img src={Imagess} alt="Logo" width="50" height="30" className="d-inline-block align-text-top"/>
          CryptoTrade
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item" >
              <Link className="nav-link" to="/Login" style={{ color: 'white', textDecoration:'none' }}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Signup" style={{ color: 'white', textDecoration:'none' }}>Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
