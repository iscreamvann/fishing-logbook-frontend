import React from 'react';

const LogStats = ({logs}) => {

  
  return (
  <div>
    <h2>Log Stats</h2>

    <div>Total caught: {logs.length}</div>
    <div>Combined Weight: {logs.length > 0 ? logs.reduce((sum, item) => sum + item.weight, 0) : "0"}</div>
  </div>
)};

export default LogStats;
