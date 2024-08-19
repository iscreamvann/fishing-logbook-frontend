import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await fetch('http://127.0.0.1:5000/auth/login', {method: 'POST', body: JSON.stringify({username: email, password: password})})
    const responseJSON = await response.json()
    console.log(responseJSON)
    if (responseJSON.token) {
        navigate('/dashboard');
    }
    }
    catch(er) {
    setError("Incorrect Combination")
    }
    // Simple validation
    if (email && password) {
    }
  };


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error ? <span>{error}</span> : null}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
