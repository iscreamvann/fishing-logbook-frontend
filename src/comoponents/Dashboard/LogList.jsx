import React from 'react';
import LogItem from './LogItem';

const LogList = ({ logs }) => (
    <div>
      <h2>Fishing Logs</h2>
      {logs.length === 0 ? (
        <p>No logs available.</p>
      ) : (
        <ul>
          {logs.map((log, index) => (
            <LogItem key={index} log={log} />
          ))}
        </ul>
      )}
    </div>
  );
  
  export default LogList;