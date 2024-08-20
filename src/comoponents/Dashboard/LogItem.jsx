import React from 'react';
import {format} from "date-fns"

// note to self, date fns: check https://date-fns.org/v3.6.0/docs/format for format options

const LogItem = ({ log }) => (
  <li>
    <strong>{format(new Date(log.createdAt), "do MMM yy - HH:mm")}</strong> - {log.name} - {log.location} - {log.breed} - {log.weight} lbs
  </li>
);

export default LogItem;
