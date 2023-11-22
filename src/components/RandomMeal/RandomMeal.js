import React, { useContext, useEffect } from "react";
import { myContext } from "../context/context";
import './RandomMeal.css';

const RandomMeal = () => {
  const { fetchRandomMeal, randomMeal} = useContext(myContext);
  
  useEffect (() => {
    fetchRandomMeal()
  }, [fetchRandomMeal]);

  return (
    <div className="random">
      {randomMeal.map((meal) => (
        <div key={meal.idMeal} className="random-grid">
          
          <div className="random-control">
            <img src={meal.strMealThumb} alt="" />
            <h2> {meal.strMeal}</h2>
            <button onClick={fetchRandomMeal}> Generate Another Meal</button>
          </div>

          <div className="random-instructions">
            <h4>Instructions</h4>
            <p>{meal.strInstructions}</p>
            
          </div>
        </div>
      ))}
      
    </div>

  )
}

export default RandomMeal