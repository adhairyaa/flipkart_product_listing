import React from "react";
// import { useStateProvider } from "../../context/StateProvider";
import "./Filter.css";
function Filter() {
  // const { state,dispatch } = useStateProvider();
  return (
    <div className="filterBar">
      <div className="filterBar-container">
        <div className="filterBar_title">
          <h5>Filter</h5>
          <button>Clear</button>
        </div>
        <div className="sort-by-filter">
          <p>Sort-by</p>
          <div>
            <input type="radio" name="sort-by"></input> low-to-high
          </div>
          <div>
            <input type="radio" name="sort-by"></input> high-to-low
          </div>
        </div>
        <div className="gender-filter">
          <p>Gender</p>
          <input type="checkbox"></input>Men
          <input type="checkbox"></input>Women
        </div>
        <div className="size-filter">
          <p>Size</p>
          <input type="checkbox"></input>L<input type="checkbox"></input>XL
          <input type="checkbox"></input>S<input type="checkbox"></input>M
        </div>
        <div className="brand-filter">
          <p>Size</p>
          <input type="checkbox"></input>L<input type="checkbox"></input>XL
          <input type="checkbox"></input>S<input type="checkbox"></input>M
        </div>
      </div>
    </div>
  );
}

export default Filter;
