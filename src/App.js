import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from 'react-router-dom';
import Start from './components/Start/Start';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Categories from './components/Categories/Categories';
import RandomMeal from './components/RandomMeal/RandomMeal';
import RecipeInfo from './components/RecipeInfo/RecipeInfo';
import CategoriesInfo from './components/CategoriesInfo/CategoriesInfo';
import About from './components/About/About';
import Login from './components/Login/Login';
import { GiMeal } from 'react-icons/gi';
import { BiFoodMenu } from 'react-icons/bi';
import { FaRandom } from 'react-icons/fa';
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={user ? <Navigate to="/meals" /> : <Start user={user} handleLogout={handleLogout} />} />
          <Route path="/start" element={user ? <Start /> : <Navigate to="/login" />} />
          <Route path="/meals" element={user ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/meals/:MealId" element={user ? <RecipeInfo /> : <Navigate to="/login" />} />
          <Route path="/categories" element={user ? <Categories /> : <Navigate to="/login" />} />
          <Route path="/categories/:strCategory" element={user ? <CategoriesInfo /> : <Navigate to="/login" />} />
          <Route path="/random" element={user ? <RandomMeal /> : <Navigate to="/login" />} />
          <Route path="/about" element={user ? <About /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        </Routes>
        {user && (
          <footer>
            <NavLink to="/meals" className="iconWrapper">
              <GiMeal className="icon" />
              Meals
            </NavLink>
            <NavLink to="/categories" className="iconWrapper">
              <BiFoodMenu className="icon" />
              Categories
            </NavLink>
            <NavLink to="/random" className="iconWrapper">
              <FaRandom className="icon" />
              Random
            </NavLink>
            <NavLink to="/about" className="iconWrapper">
              <AiOutlineUser className="icon" />
              About
            </NavLink>
            <NavLink onClick={handleLogout} className="iconWrapper">
              <AiOutlineLogout className="iconLogout" />
              Logout
            </NavLink>
          </footer>
        )}
      </Router>
    </div>
  );
}

export default App;
