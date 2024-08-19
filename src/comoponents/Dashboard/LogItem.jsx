import React from 'react';

const LogItem = ({ log }) => (
  <li>
    <strong>{log.date}</strong> - {log.location} - {log.fishType} - {log.weight} lbs
  </li>
);

export default LogItem;
