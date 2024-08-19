import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to Fishing Logbook</h1>
    <p>Please log in or create a profile to get started.</p>
    <div>
      <Link to="/login">Login</Link>
      <Link to="/create-profile">Create Profile</Link>
    </div>
  </div>
);

export default Home;
