import React from "react";
import { useStateProvider } from "../../context/StateProvider";
import "./Filter.css";
function Filter() {
  const { dispatch } = useStateProvider();

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
            <input
              type="radio"
              name="sort-by"
              onClick={() => dispatch({ type: "Low To High" })}
            ></input>{" "}
            low-to-high
          </div>
          <div>
            <input
              type="radio"
              name="sort-by"
              onClick={() => dispatch({ type: "High To Low" })}
            ></input>{" "}
            high-to-low
          </div>
        </div>
        <div className="gender-filter">
          <p>Gender</p>
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "Men Filter", payload: "Men" })}
          ></input>
          Men
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "Women Filter", payload: "Men" })}
          ></input>
          Women
        </div>
        <div className="size-filter">
          <p>Size</p>
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "L" })}
          ></input>
          L
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "XL" })}
          ></input>
          XL
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "S" })}
          ></input>
          S
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "M" })}
          ></input>
          M
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
