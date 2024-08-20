import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {api} from "../services/apiServices"
import { AppStyled, MainStyled } from '../comoponents/Main';
import Sidebar from '../comoponents/Sidebar';

const CreateProfile = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [weight, setWeight] = useState(0);
  const [location, setLocation] = useState('');
  const [catchBait, setCatchBait] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simple validation
    if (name && breed && weight && location && catchBait) {
        console.log("data:", name, breed, weight, location, catchBait)
        const response = await api.post("/fish", { name, breed, weight: parseFloat(weight), location, catchBait})
        console.log("response:", response)
      // Redirect to login page after profile creation
      navigate('/dashboard');
    }
    else{
        setError("Please fill in all fields")
    }
  };

  return (
    <AppStyled>
        <Sidebar/>
    <MainStyled>
      <h1>Add fish</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Breed:</label>
          <input 
            name="breed" 
            value={breed} 
            onChange={(e) => setBreed(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Weight:</label>
          <input 
            type="number" 
            value={weight} 
            step=".1"
            onChange={(e) => setWeight(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Location:</label>
          <input 
            type="text" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Catch Bait:</label>
          <input 
            type="text" 
            value={catchBait} 
            onChange={(e) => setCatchBait(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </MainStyled>
    </AppStyled>
  );
};

export default CreateProfile;
