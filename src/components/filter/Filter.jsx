import React from "react";
import { useStateProvider } from "../../context/StateProvider";
import "./Filter.css";
function Filter() {
  const { dispatch, state } = useStateProvider();
  const { gender, sortBy, size } = state;

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
              onClick={() => dispatch({ type: "LOW_TO_HIGH" })}
              checked={sortBy === "LOW_TO_HIGH" ? true : false}
            ></input>{" "}
            low-to-high
          </div>
          <div>
            <input
              type="radio"
              name="sort-by"
              onClick={() => dispatch({ type: "HIGH_TO_LOW" })}
              checked={sortBy === "HIGH_TO_LOW" ? true : false}
            ></input>{" "}
            high-to-low
          </div>
        </div>
        <div className="gender-filter">
          <p>Gender</p>
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "GENDER_FILTER", payload: "men" })}
            checked={gender.includes("men") ? true : false}
          ></input>
          Men
          <input
            type="checkbox"
            onClick={() =>
              dispatch({ type: "GENDER_FILTER", payload: "women" })
            }
            checked={gender.includes("women") ? true : false}
          ></input>
          Women
        </div>
        <div className="size-filter">
          <p>Size</p>
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "SIZE_FILTER", payload: "L" })}
            checked={size.includes("L") ? true : false}
          ></input>
          L
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "SIZE_FILTER", payload: "XL" })}
            checked={size.includes("XL") ? true : false}
          ></input>
          XL
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "SIZE_FILTER", payload: "S" })}
            checked={size.includes("S") ? true : false}
          ></input>
          S
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "SIZE_FILTER", payload: "M" })}
            checked={size.includes("M") ? true : false}
          ></input>
          M
        </div>
        <div className="brand-filter"></div>
      </div>
    </div>
  );
}

export default Filter;
