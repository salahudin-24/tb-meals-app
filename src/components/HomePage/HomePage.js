import React, { useState, useContext, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { myContext } from "../context/context";
import "./HomePage.css";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Adjust the number of items per page as needed

  const { fetchHomePage, meals } = useContext(myContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHomePage("");
  }, [fetchHomePage]);

  const fetchMealsHandler = useCallback(() => {
    if (search.trim() !== "") {
      fetchHomePage(search);
      setCurrentPage(1); // Reset to the first page when performing a new search
    }
  }, [search, fetchHomePage]);

  const indexOfLastMeal = currentPage * itemsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - itemsPerPage;
  const currentMeals = meals.slice(indexOfFirstMeal, indexOfLastMeal);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
        {currentMeals && currentMeals.length > 0 ? (
          currentMeals.map((meal) => (
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

        {/* Pagination */}

      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(meals.length / itemsPerPage) }).map(
          (_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default HomePage;
