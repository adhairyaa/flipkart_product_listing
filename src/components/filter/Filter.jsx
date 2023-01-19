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
          <button onClick={() => dispatch({ type: "CLEAR_FILTER" })}>
            Clear
          </button>
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
            onClick={() => dispatch({ type: "GENDER_FILTER", payload: "men" })}
          ></input>
          Men
          <input
            type="checkbox"
            onClick={() =>
              dispatch({ type: "GENDER_FILTER", payload: "women" })
            }
          ></input>
          Women
        </div>
        <div className="size-filter">
          <p>Size</p>
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "SIZE_FILTER", payload: "L" })}
          ></input>
          L
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "SIZE_FILTER", payload: "XL" })}
          ></input>
          XL
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "SIZE_FILTER", payload: "S" })}
          ></input>
          S
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "SIZE_FILTER", payload: "M" })}
          ></input>
          M
        </div>
        <div className="brand-filter"></div>
      </div>
    </div>
  );
}

export default Filter;
