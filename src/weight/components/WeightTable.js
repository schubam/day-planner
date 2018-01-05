import React from "react";
import "./WeightTable.css";

import WeekHeaderRow from "./WeekHeaderRow";
import WeekDataRow from "./WeekDataRow";

// 2018: Week 1 - Week 52

const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const WeightTable = ({ columns, weeks }) => (
  <table border="1">
    <thead>
      <tr>{columns.map(label => <th key={label}>{capitalize(label)}</th>)}</tr>
    </thead>
    <tbody>
      {weeks.map(week => [
        <WeekHeaderRow label={week.label} columns={columns} key={week.week} />,
        <WeekDataRow week={week} columns={columns} key={`data_${week.week}`} />
      ])}
    </tbody>
  </table>
);

export default WeightTable;
