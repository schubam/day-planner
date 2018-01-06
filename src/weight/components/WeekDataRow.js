import React from "react";
import WeekDataInputField from "../containers/WeekDataInputField";

const WeekDataRow = ({ week, columns }) => (
  <tr>
    {columns.map((day, i) => (
      <WeekDataInputField value={week[day]} key={`${week.week}_${i}`} />
    ))}
  </tr>
);

export default WeekDataRow;
