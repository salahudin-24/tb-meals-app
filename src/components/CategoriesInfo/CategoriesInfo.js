import React, {  useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { myContext } from "../context/context";
import "./CategoriesInfo.css";

const CategoriesInfo = () => {
    const { fetchCategoriesInfo, categoriesInfo } = useContext(myContext);
    const { strCategory } = useParams();


    useEffect(() => {
        fetchCategoriesInfo(strCategory)
    }, [strCategory, fetchCategoriesInfo]);

    let navigate = useNavigate();

    return (
        <div className="category-item">
            <div className="category-text">
                <h2>{strCategory}</h2>
            </div>
            <div className="category-meals">
                {(categoriesInfo) ? (
                    categoriesInfo.map((meals) => (
                        <div className="card" key={meals.idMeal} 
                        onClick={() => { navigate(`/meals/${meals.idMeal}`) }}>
                            <img src={meals.strMealThumb} alt="#" />
                            <h3>{meals.strMeal}</h3>
                        </div>
                    ))
                ) : (
                    <h2>No meals found, Try another word...</h2>
                )}

            </div>
        </div>

    )
}

export default CategoriesInfo