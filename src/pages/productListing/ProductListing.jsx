import React from "react";
import Filter from "../../components/filter/Filter";
import Navbar from "../../components/navbar/Navbar";
import { useStateProvider } from "../../context/StateProvider";
import products from "../../products/products.json";
import "./ProductListing.css";
function ProductListing() {
  const { state } = useStateProvider();
  const { sortBy, gender } = state;

  const getSortedProducts = (products, sortBy) => {
    return sortBy === "Low To High"
      ? products.sort((a, b) => a.price - b.price)
      : sortBy === "High To Low"
      ? products.sort((a, b) => b.price - a.price)
      : products;
  };

  const sortedProducts = getSortedProducts(products, sortBy);
  let filteredData = sortedProducts;
  console.log({ state });
  const handleGenderFilter = (data, gender) => {
    const genderFilteredData = data.filter(
      (item) => item.category === gender.includes(item.category)
    );
    console.log({ genderFilteredData });
    filteredData = genderFilteredData;
  };

  const handleFilterFunctions = () => {
    if (state.gender.length > 0) {
      handleGenderFilter(filteredData, gender);
    }
  };

  handleFilterFunctions();

  return (
    <div>
      <Navbar />
      <Filter />
      <div className="productListing">
        {filteredData.map((item) => (
          <div className="productTile">
            <img src={item["product-image"]} alt="productImage"></img>
            <p>{item.name}</p>
            <p>{item.Price}</p>
            <p>free Delivery</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
