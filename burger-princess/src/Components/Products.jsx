import React from 'react'

const Products = ({ name, price, id, img }) => {
  return (
    <div className="item-box">

      <div>{name}</div>
      <img src={img} className="images" />
      <div className="item-price">${price}</div>

        <button className="item-add-button" onClick={() => addToCart()}>
          + Add to cart
        </button>
    </div>
  )
}
export default Products
