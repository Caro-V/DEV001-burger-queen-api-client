import React from 'react'
import Navbar from './Navbar'
import Products from './Products'
import dbproducts from '../data/dbproducts.json'

const productslist = dbproducts.products
console.log(productslist)

const ProductsList = () => {
  return (
    <div>
    <Navbar></Navbar>
    <div className="items-list">
      {productslist.map((product, idx) => {
        return <Products key={product.id} {...product} />
      })}
    </div>
    </div>
  )
}

export default ProductsList
