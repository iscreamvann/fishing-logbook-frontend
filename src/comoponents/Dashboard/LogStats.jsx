import React from 'react';

const LogStats = ({logs}) => {

  console.log("dfsd",logs, logs.reduce((a, b) => {return a.weight ?? 0 + b.weight ?? 0}))
  
  return (
  <div>
    <h2>Log Stats</h2>

    <div>Total caught: {logs.length}</div>
    <div>Combined Weight: {logs.reduce((sum, item) => sum + item.weight, 0)}</div>
  </div>
)};

export default LogStats;
