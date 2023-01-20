import React from "react";
import Filter from "../../components/filter/Filter";
import Navbar from "../../components/navbar/Navbar";
import { useStateProvider } from "../../context/StateProvider";
import products from "../../products/products.json";
import "./ProductListing.css";
function ProductListing() {
  const { state } = useStateProvider();
  const { sortBy, gender, size } = state;

  const getSortedProducts = (products, sortBy) => {
    return sortBy === "LOW_TO_HIGH"
      ? products.sort((a, b) => a.price - b.price)
      : sortBy === "HIGH_TO_LOW"
      ? products.sort((a, b) => b.price - a.price)
      : products;
  };

  const sortedProducts = getSortedProducts(products, sortBy);
  let filteredData = sortedProducts;
  console.log({ state });
  const handleGenderFilter = (data, gender) => {
    const genderFilteredData = data.filter((item) =>
      gender.includes(item.category)
    );
    filteredData = genderFilteredData;
  };
  const handleSizeFilter = (data, size) => {
    const sizeFilteredData = data.filter((item) => size.includes(item.size));
    filteredData = sizeFilteredData;
  };

  const handleFilterFunctions = () => {
    if (state.gender.length > 0) {
      handleGenderFilter(filteredData, gender);
    }
    if (state.size.length > 0) {
      handleSizeFilter(filteredData, size);
    }
  };

  handleFilterFunctions();

  return (
    <div>
      <Navbar />
      <Filter />
      <div className="productListing">
        <div className="product-number">
          <h2>No. of products showing ( {filteredData.length} )</h2>
        </div>
        {filteredData.map((item) => (
          <div className="productTile">
            <img src={item["product-image"]} alt="productImage"></img>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>free Delivery</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
