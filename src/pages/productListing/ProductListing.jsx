import React from "react";
import Filter from "../../components/filter/Filter";
import Navbar from "../../components/navbar/Navbar";
import products from "../../products/products.json";
import "./ProductListing.css";
function ProductListing() {
  // const getSortedProducts = (products, sortBy) => {
  //   return sortBy === "Low To High"
  //     ? products.sort((a, b) => a.price - b.price)
  //     : sortBy === "High To Low"
  //     ? products.sort((a, b) => b.price - a.price)
  //     : products;
  // };
  return (
    <div>
      <Navbar />
      <Filter />
      <div className="productListing">
        {products.map((item) => (
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
