import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {setToken} from "../services/apiServices"
import {styled} from "styled-components"

const ErrorMessageStyled = styled.span`
color: red;
display: block;
margin: 10px 0;
`

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await fetch(`${import.meta.env.VITE_APP_API}/auth/login`, {method: 'POST', headers: {'content-type': "application/json", "accept": "*/*"}, body: JSON.stringify({email: email, password: password})})
    const responseJSON = await response.json()
    if (responseJSON.token) {
        setToken(responseJSON.token)
        navigate('/dashboard');
    }
    else if(response.status === 401)
      setError("Incorrect Combination")
    }
    catch(er) {
      console.error(er)
      setError("Error with API")
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
        {error ? <ErrorMessageStyled>{error}</ErrorMessageStyled> : null}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
