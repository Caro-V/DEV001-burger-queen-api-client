import React from 'react'
import Navbar from './Navbar'
import Products from './Products'
import products from '../data/dbproducts.json'

const ProductsList = () => {
  return (
    <div>
    <Navbar></Navbar>
    <div className="items-list">
      {products.map((product, idx) => {
        return <Products key={product.id} {...product} />
      })}
    </div>
    </div>
  )
}

export default ProductsList
