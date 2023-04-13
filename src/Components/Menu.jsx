import React, { useState } from "react";
import Navbar from "./Navbar";
import ProductsList from "./ProductsList";
import Categories from "./Categories";
import dbproducts from "../data/dbproducts.json";
import Pedido from "./Pedido";

const productslist = dbproducts.products;
const allcategories = [
  "All",
  ...new Set(productslist.map((productslist) => productslist.category)),
];

console.log(Categories);

const Menu = () => {
  const [menuItems, SetMenuItems] = useState(productslist);
  const [categories, SetCategories] = useState(allcategories);

  const filterproducts = (category) => {
    if (category === "All") {
      return SetMenuItems(productslist);
    }
    const newProducts = productslist.filter(
      (productslist) => productslist.category === category
    );
    return SetMenuItems(newProducts);
  };

  const addPedido = (pedido) => {
    SetMenuItems([menuItems, pedido])
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="d-flex">
        <div className="col-md-8">
          <Categories categories={categories} filterproducts={filterproducts} />
          <ProductsList productslist={menuItems} addPedido={addPedido}/>
        </div>
        <Pedido />
      </div>
    </>
  );
};

export default Menu;
