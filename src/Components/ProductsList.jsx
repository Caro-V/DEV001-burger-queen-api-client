import React from 'react'
import Products from './Products'
import dbproducts from '../data/dbproducts.json'
import { useState } from 'react'

const productslist = dbproducts.products
console.log(productslist)

const ProductsList = ({}) => {

  return (
    <div>
    <div className="items-list">
      {productslist.map((product, idx) => {
        return <Products key={product.id} {...product} />
      })}
    </div>
    </div>
  )
}

export default ProductsList
