import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateProfile from './pages/CreateProfile';
import Dashboard from './pages/Dashboard';
import NotFound from './comoponents/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/create-profile" element={<CreateProfile />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
