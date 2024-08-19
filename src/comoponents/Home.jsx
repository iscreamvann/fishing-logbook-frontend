// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Fishing Logbook</h1>
      <div className="home-buttons">
        <Link to="/login">
          <button className="home-button">Login</button>
        </Link>
        <Link to="/create-profile">
          <button className="home-button">Create Profile</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
