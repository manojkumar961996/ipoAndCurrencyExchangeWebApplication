import React from "react";
import "./StockBar.css";
import { Link } from "react-router-dom";

const StockNavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link loginPage">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-link signUpPage">
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default StockNavBar;
