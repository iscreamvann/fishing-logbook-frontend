import { useState } from 'react';
import './App.css';

function App() {
  const [logs, setLogs] = useState([]);
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [fishType, setFishType] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && location && fishType && weight) {
      setLogs([
        ...logs,
        { date, location, fishType, weight }
      ]);
      setDate('');
      setLocation('');
      setFishType('');
      setWeight('');
    }
  };

  return (
    <div className="App">
      <h1>Fishing Logbook</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date:</label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input 
            type="text" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Fish Type:</label>
          <input 
            type="text" 
            value={fishType} 
            onChange={(e) => setFishType(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Weight (lbs):</label>
          <input 
            type="number" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Add Log</button>
      </form>
      
      <div className="log-list">
        <h2>Fishing Logs</h2>
        {logs.length === 0 ? (
          <p>No logs yet.</p>
        ) : (
          <ul>
            {logs.map((log, index) => (
              <li key={index}>
                <strong>{log.date}</strong> - {log.location} - {log.fishType} - {log.weight} lbs
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
