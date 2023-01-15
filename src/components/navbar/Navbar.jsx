import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      Flipkart
      <span style={{ color: "yellow", fontSize: ".8rem", marginLeft: 0 }}>
        plus
      </span>
      <input placeholder="search....."></input>
    </div>
  );
}

export default Navbar;
