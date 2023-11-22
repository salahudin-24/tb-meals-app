import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { myContext } from "../context/context";
import './Categories.css';

const Categories = () => {

  const { fetchCategories, categories } = useContext(myContext)
  let navigate = useNavigate();

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories]);


  return (
    <div className="category">
      {categories.map(category => (
        <div key={category.idCategory} onClick={() => { navigate(`/categories/${category.strCategory}`) }}>
          <img src={category.strCategoryThumb} alt="" />
          <h3>{category.strCategory}</h3>
        </div>
      ))}
      <div className="category-meals">

      </div>
    </div>
  )
}

export default Categories