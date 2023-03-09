import React from 'react'
import dbproducts from '../data/dbproducts.json'

const productslist = dbproducts.products
const allcategories = ['all', ...new Set(productslist.map((productslist) => productslist.category))]

function CatList (props, filterproducts) {
  return <button onClick={() => filterproducts(props.value)}>{props.value}</button>
}

const Categories = (props) => {
  const listItems = allcategories.map((category) =>
 <CatList key={category.toString()}
 value={category}/>)

  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default Categories
