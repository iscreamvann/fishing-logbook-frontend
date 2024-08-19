import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside>
    <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/create-profile">Create Profile</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
