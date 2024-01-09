import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StockNavBar from "./components/navbar/StockNavBar";
import About from "./components/utils/About";
import LoginComponent from "./components/utils/LoginComponent";
import SignUp from "./components/utils/SignUp";
import Dashboard from "./Dashboard";
import "./App.css"; // Import the updated styles

const App = () => {
  return (
    <Router>
      <div className="App"> {/* Add the App class to the root element */}
        <StockNavBar />
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
