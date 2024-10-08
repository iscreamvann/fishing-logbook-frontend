import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {setToken} from "../services/apiServices"
import {styled} from "styled-components"
import colors from "../styles/colors.js"
import {Button} from "../components/Button"
import { Link } from 'react-router-dom';

const ErrorMessageStyled = styled.span`
color: ${colors.indicator.red};
display: block;
margin: 10px 0;
`

const LoginWrapperStyled = styled.div`
background-color: ${colors.greyscale.light};
width: 100%;
height: 100%;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const LoginFormStyled = styled.form`
border: 2px solid ${colors.theme.primary};
background-color: ${colors.greyscale.light};
box-shadow: 4px 0 10px 0px rgba(0,0,0,0.2);
display: flex;
flex-direction:column;
align-items: center;
& span{
  margin: 5px;
}
& a {
  color: ${colors.greyscale.dark};
  background-color: none;
  margin: 5px 0;
}
`



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await fetch(`${import.meta.env.VITE_APP_API}/auth/login`, {method: 'POST', headers: {'content-type': "application/json"}, body: JSON.stringify({email: email, password: password})})
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
    <LoginWrapperStyled>
      <h1>Reel Moments</h1>
      <LoginFormStyled onSubmit={handleSubmit}>
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
        <Button type="submit">Login</Button>
        <span>or</span>
        <Link to="/register" >Register</Link>
      </LoginFormStyled>
    </LoginWrapperStyled>
  );
};

export default Login;
