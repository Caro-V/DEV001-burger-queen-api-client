import React, { useState } from 'react'
import Navbar from './Navbar'
import ProductsList from './ProductsList'
import Categories from './Categories'
import dbproducts from '../data/dbproducts.json'

const productslist = dbproducts.products
const allcategories = ['all', ...new Set(productslist.map((productslist) => productslist.category))]
console.log(allcategories)
const Menu = () => {
  const [menuItems, SetMenuItems] = useState(productslist)
  const [categories, SetCategories] = useState(allcategories)

  const filterproducts = (category) => {
    if (category === 'all') {
      return SetMenuItems(productslist)
    }
    const newProducts = productslist.filter((productslist) => productslist.category === category)
    return SetMenuItems(newProducts)
  }

  return (
    <div>
      <Navbar></Navbar>
      <Categories categories={categories} filterproducts={filterproducts}/>
      <ProductsList productslist ={menuItems}/>
    </div>
  )
}

export default Menu
