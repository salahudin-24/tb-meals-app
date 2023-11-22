import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { myContext } from "../context/context";
import './RecipeInfo.css';

const RecipeInfo = () => {
    const { fetchRecipe, recipe, url } = useContext(myContext);
    const { MealId } = useParams();

    useEffect(() => {
        fetchRecipe(MealId);
    }, [MealId, fetchRecipe]);

    const str = url.split('=');
    const vId = str[1];

    return (
        <div className="recipe">
            {recipe.map((meals) => (
                <div className="recipe-content" key={meals.idMeal}>
                    <img src={meals.strMealThumb} alt="" />
                    <div className="inner-content">
                        <h1>{meals.strMeal}</h1>
                        <h2>{meals.strArea} Food</h2>
                        <h3>Category {meals.strCategory}</h3>
                    </div>
                    <div className="recipe-detail">
                        <div className="ingredients">
                            <h2>Ingredients</h2><br />
                            {Array.from({ length: 20 }, (_, index) => index + 1).map(index => {
                                const ingredient = meals[`strIngredient${index}`];
                                const measure = meals[`strMeasure${index}`];
                                if (ingredient && measure) {
                                    return <h4 key={index}>{`${ingredient} - ${measure}`}</h4>;
                                }
                                return null;
                            })}
                        </div>
                        <div className="instruction">
                            <h2>Instruction</h2><br />
                            <h4>{meals.strInstructions}</h4>
                        </div>
                    </div>
                    <div className="video">
                        <iframe src={`https://www.youtube.com/embed/${vId}`} title="YouTube video player"></iframe>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecipeInfo;
