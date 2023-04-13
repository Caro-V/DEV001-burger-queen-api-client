import React from "react";
import Pedido from "./Pedido";

const Products = ({ name, price, img }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(Pedido)
    return <Pedido />;
    
  };

  return (
    <div className="item-box">
      <div>{name}</div>
      <img src={img} className="images" />
      <div className="item-price">${price}</div>

      <button className="item-add-button" onClick={handleClick}>
        + Add to cart
      </button>
    </div>
  );
};
export default Products;
