import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-head">
        <ul>
          <Link to="/"><li>Meals <span>APP</span></li></Link>
        </ul>

      </div>
      <div className="navbar-head2">
        <h1>Praktikum <span>PRPLBK</span> 2023 &copy;</h1>
        <h2>Kelompok <span>27</span></h2>
      </div>

    </div>
  )
}

export default Navbar