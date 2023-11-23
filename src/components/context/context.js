import React, { createContext, useCallback, useState } from "react";
import axios from "axios";

export const myContext = createContext(null);

export const Context = ({ children }) => {
    const [meals, setMeals] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoriesInfo, setCategoriesInfo] = useState([]);
    const [randomMeal, setRandomMeal] = useState([]);
    const [recipe, setRecipe] = useState([]);
    const [url, setUrl] = useState("");


    const fetchHomePage = useCallback((search) => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then((res) => {
                console.log(res.data.meals);
                setMeals(res.data.meals);
            })
    }, [])


    const fetchRecipe = useCallback((MealId) => {
        if (MealId !== "") {
            axios
                .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
                .then((res) => {
                    console.log(res.data.meals[0]);
                    setRecipe(res.data.meals);
                    setUrl(res.data.meals[0].strYoutube);
                })
        }
    }, [])

    const fetchCategories = useCallback(() => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then((res) => {
                console.log(res.data.categories);
                setCategories(res.data.categories);
            })
    }, [])

    const fetchCategoriesInfo = useCallback((strCategory) => {
        if (strCategory !== "") {
            axios
                .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
                .then((res) => {
                    console.log(res.data.meals);
                    setCategoriesInfo(res.data.meals);
                })
        }
    }, [])


    const fetchRandomMeal = useCallback(() => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then((res) => {
                console.log(res.data.meals);
                setRandomMeal(res.data.meals);
            })
    }, [])




    return (
        <myContext.Provider
            value={{
                fetchHomePage, meals,

                fetchRecipe, recipe, url,
                fetchCategories, categories,
                fetchRandomMeal, randomMeal,
                fetchCategoriesInfo, categoriesInfo
            }}>
            {children}
        </myContext.Provider>
    )

}
