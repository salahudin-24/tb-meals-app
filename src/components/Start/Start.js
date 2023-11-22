import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css';
import icon from './icon.png';

const Start = ({ user, handleLogout }) => {
  return (
    <div className="start">
      <div className="start-icon">
        <img className="icon-app" src={icon} alt="#" />
      </div>
      <div className="start-name">
        <h1>Meals APP</h1>
        {user ? (
          <>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Start;