import React, { useState, useContext, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { myContext } from "../context/context";
import "./HomePage.css";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const { fetchHomePage, meals } = useContext(myContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHomePage("");
  }, [fetchHomePage]);

  const fetchMealsHandler = useCallback(() => {
    if (search.trim() !== "") {
      fetchHomePage(search);
    }
  }, [search, fetchHomePage]);

  return (
    <div className="home">
      <div className="home-search">
        <input
          type="text"
          placeholder="Search your meals"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn" onClick={fetchMealsHandler}>
          Search Meal
        </button>
      </div>

      <div className="home-meals">
        {meals && meals.length > 0 ? (
          meals.map((meal) => (
            <div
              className="card"
              key={meal.idMeal}
              onClick={() => {
                navigate(`/meals/${meal.idMeal}`);
              }}
            >
              <img src={meal.strMealThumb} alt="#" />
              <h3>{meal.strMeal}</h3>
            </div>
          ))
        ) : (
          <h2>No meals found, Try another word...</h2>
        )}
      </div>
    </div>
  );
};

export default HomePage;
