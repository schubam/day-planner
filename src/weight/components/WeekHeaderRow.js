import React from "react";

const WeekHeaderRow = ({ columns, label }) => (
  <tr>
    <th colSpan={columns.length}>{label}</th>
  </tr>
);

export default WeekHeaderRow;
