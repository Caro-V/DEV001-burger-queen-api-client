import React from "react";
import dbproducts from "../data/dbproducts.json";
import Menu from "./Menu";

const productslist = dbproducts.products;
const allcategories = [
  "All",
  ...new Set(productslist.map((productslist) => productslist.category)),
];

function CatList(props) {
  return (
    <div>
      <button className="btn btn-secondary" onClick={() => Menu(productslist)}>{props.value}</button>
    </div>
  );
}

const Categories = (props) => {
  const listItems = allcategories.map((category) => (
    <CatList key={category.toString()} value={category} />
  ));

  return (
    <>
      <ul className="d-grid gap-2 col-6 mx-auto">{listItems}</ul>
    </>
  );
};

export default Categories;
