import React from "react";
import Filter from "../../components/filter/Filter";
import Navbar from "../../components/navbar/Navbar";
import { useStateProvider } from "../../context/StateProvider";
import products from "../../products/products.json";
import "./ProductListing.css";
function ProductListing() {
  const { state } = useStateProvider();
  const { sortBy } = state;
  const getSortedProducts = (products, sortBy) => {
    return sortBy === "Low To High"
      ? products.sort((a, b) => a.price - b.price)
      : sortBy === "High To Low"
      ? products.sort((a, b) => b.price - a.price)
      : products;
  };
  const sortedProducts = getSortedProducts(products, sortBy);
  console.log(sortBy);

  const handleGenderFilter = (sortedData,gender)=>{

    
const genderFilteredData = sortedData.filter((Item)=>gender ==! null? Item.gender===:true)
  }
  return (
    <div>
      <Navbar />
      <Filter />
      <div className="productListing">
        {sortedProducts.map((item) => (
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
